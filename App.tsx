import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import { Scan, History, Liked } from './screens';
import { Theme as theme } from './shared';

const TabNavigator = createBottomTabNavigator({
  History,
  Scan,
  Liked,
}, {
  initialRouteName: 'Scan'
});

const AppContainer = createAppContainer(TabNavigator);

export default () => (
  <ThemeProvider theme={theme}>
    <AppContainer />
  </ThemeProvider>
);
