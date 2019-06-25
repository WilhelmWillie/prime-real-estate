import { Scan, History, Liked } from './screens';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  History,
  Scan,
  Liked,
}, {
  initialRouteName: 'Scan'
});

export default createAppContainer(TabNavigator);
