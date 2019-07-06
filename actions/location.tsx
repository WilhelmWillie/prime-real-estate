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

  const { coords } =  await Location.getCurrentPositionAsync({});
  const address = await Location.reverseGeocodeAsync({
    latitude: coords.latitude,
    longitude: coords.longitude 
  });

  store.setState ({ location: {
    coords,
    address
  }});
}
