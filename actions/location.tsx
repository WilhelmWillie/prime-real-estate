import * as Location from 'expo-location';

export const setLocationPermissions = (store : any, hasPermission : boolean) => {
  const location = store.state.location;
  location.hasPermission = hasPermission;
  store.setState({ location });
};

export const getLocation = async (store : any) => {
  if (!store.state.location.hasPermission) {
    return;
  }

  const location =  await Location.getCurrentPositionAsync({});
  const postalAddress = await Location.reverseGeocodeAsync({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  })

  store.setState ({ location: {
    data: postalAddress
  }});
}
