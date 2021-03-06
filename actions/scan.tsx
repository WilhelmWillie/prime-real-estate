import { parseString } from 'react-native-xml2js';
import { uniqueId } from 'lodash';

import { ZILLOW_API_KEY } from '../utils/getConstants';

type Coordinate = {
  latitude: number,
  longitude:  number,
}

const degreesToRadians = (degrees : number) : number => {
  return degrees * Math.PI / 180;
}

const distanceBetweenCoords = (coordA : Coordinate, coordB : Coordinate) : number => {
    const earthRadiusKm = 6371;

    const latDifference = degreesToRadians(coordB.latitude - coordA.latitude);
    const lonDifference = degreesToRadians(coordB.longitude - coordA.longitude);

    const latitudeA = degreesToRadians(coordA.latitude);
    const latitudeB = degreesToRadians(coordB.latitude);

    const a = Math.sin(latDifference/2) * Math.sin(latDifference/2) +
              Math.sin(lonDifference/2) * Math.sin(lonDifference/2) * Math.cos(latitudeA) * Math.cos(latitudeB);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return earthRadiusKm * c;
}

const getPropertyAverageValue = async (latitude : number, longitude: number, state: string, city: string) => {
  const API_URL = `https://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${ZILLOW_API_KEY}&state=${state}&city=${city}&childtype=neighborhood`;
  const apiResponse = await fetch(API_URL);
  const apiText = await apiResponse.text();

  const apiData = await new Promise(
    (resolve, reject) => parseString(apiText, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  );

  const regions = apiData['RegionChildren:regionchildren'].response[0].list[0].region;

  let closestRegion = null, closestDistance = Number.MAX_SAFE_INTEGER;

  regions.forEach((region: any) => {
      if (region["zindex"]) {
        // Calculate distance from provided coordinates
        // IF shorter, promote current region

        const regionCoords = { latitude: parseFloat(region.latitude[0]), longitude: parseFloat(region.longitude[0]) };

        const currDistance = distanceBetweenCoords({ latitude, longitude }, regionCoords);
        if (currDistance < closestDistance) {
          closestRegion = region;
          closestDistance = currDistance;
        }
      }
  });

  // Simulated delay :)
  await new Promise(
    (resolve) => {
      setTimeout(
        resolve,
        Math.random() * 2000 + 1000
      )
    }
  );

  if (!closestRegion) {
    return null;
  }

  return {
    neighborhood: closestRegion.name[0],
    avgValue: closestRegion.zindex[0]._
  }
}

export const getResult = async store => {
  const { latitude, longitude } = store.state.location.coords;
  const { region, city, street } = store.state.location.address[0];

  const processedScanData = await getPropertyAverageValue(latitude, longitude, region, city);

  // Null result
  if (!processedScanData) {
    store.setState({
      loading: false
    });

    alert('Scan failed. Please try in a different location');
    return;
  }

  const result = {
    id: uniqueId('result_'),
    street,
    neighborhood: processedScanData.neighborhood,
    avgValue: processedScanData.avgValue,
    scanTime: Date.now(),
  }

  // Add item to history
  const newHistory = store.state.history;
  newHistory.unshift(result);

  // Update app state
  store.setState({ history: newHistory, result, loading: false });
};
