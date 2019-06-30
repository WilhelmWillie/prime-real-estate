import { parseString } from 'react-native-xml2js';

import { ZILLOW_API_KEY } from '../utils/getConstants';

const API_URL = `https://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${ZILLOW_API_KEY}&state=wa&city=seattle&childtype=neighborhood`;

const getZillowData = async () => {
  const apiResponse = await fetch(API_URL);
  const apiText = await apiResponse.text();

  return await new Promise(
    (resolve, reject) => parseString(apiText, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    })
  );
}

export const getResult = async store => {
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



  const zillowData = await getZillowData();
  const properties = zillowData['RegionChildren:regionchildren'].response[0].list[0].region;

  let value = 0, count = 0;
  properties.forEach((property: any) => {
    if (property["zindex"]) {
      const propertyValue = property.zindex[0]._;
      value += parseInt(propertyValue);
      count++;
    }
  });

  const result = {
    neighborhood: neighborhoods[Math.floor(Math.random() * neighborhoods.length)],
    street: streets[Math.floor(Math.random() * streets.length)],
    avgValue: Math.floor(value/count)
  }

  const newHistory = store.state.history;
  newHistory.unshift(result);
  store.setState({ history: newHistory, result });
};
