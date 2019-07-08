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

  // Set app state to loading to show loading spinner
  store.setState({ loading: true });

  const { coords } =  await Location.getCurrentPositionAsync({});
  const address = await Location.reverseGeocodeAsync({
    latitude: coords.latitude,
    longitude: coords.longitude
  });

  const newLocation = store.state.location;
  newLocation.coords = coords;
  newLocation.address = address;

  store.setState({ location: newLocation});
}
