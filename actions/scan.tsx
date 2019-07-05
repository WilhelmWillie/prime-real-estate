import { parseString } from 'react-native-xml2js';

import { ZILLOW_API_KEY } from '../utils/getConstants';

const API_URL = `https://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${ZILLOW_API_KEY}&state=wa&city=seattle&childtype=neighborhood`;

const getPropertyAverageValue = async () => {
  const apiResponse = await fetch(API_URL);
  const apiText = await apiResponse.text();

  const apiData = await new Promise(
    (resolve, reject) => parseString(apiText, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  );

  const properties = apiData['RegionChildren:regionchildren'].response[0].list[0].region;
  let value = 0, count = 0;
  properties.forEach((property: any) => {
    if (property["zindex"]) {
      const propertyValue = property.zindex[0]._;
      value += parseInt(propertyValue);
      count++;
    }
  });

  // TEMPORARY SIMULATED DELAY
  await new Promise(
    (resolve, reject) => {
      setTimeout(
        resolve,
        Math.random() * 2000 + 1000
      )
    }
  );

  return Math.floor(value/count);
}

export const getResult = async store => {
  store.setState({ loading: true });

  const neighborhoods = [
    'Mission District',
    'Mission Bay',
    'SOMA',
    'Pacific Heights',
    'Nob Hill',
    'Hayes Valley'
  ]

  const streets = [
    'Mission Street',
    'Market Street',
    'California Street',
    'Van Ness'
  ]

  const avgValue = await getPropertyAverageValue();

  const result = {
    neighborhood: neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
    street: streets[Math.floor(Math.random() * streets.length)],
    avgValue
  }

  const newHistory = store.state.history;
  newHistory.unshift(result);
  store.setState({ history: newHistory, result, loading: false });
};
