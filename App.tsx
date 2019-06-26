import React, { createContext } from 'react';
import { Scan, History, Liked } from './screens';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import AppContext from './contexts/AppContext';

const TabNavigator = createBottomTabNavigator({
  History,
  Scan,
  Liked,
}, {
  initialRouteName: 'Scan'
});

const AppContainer = createAppContainer(TabNavigator);

export default () => (
  <AppContext.Provider value={{
    result: {
      neighborhood: 'Mission District',
      street: 'Valencia St',
      avgValue: 1400000
    }
  }}>
    <AppContainer />
  </AppContext.Provider>
)
