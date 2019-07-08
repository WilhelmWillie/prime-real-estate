import React from 'react';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { ThemeProvider } from 'styled-components';

import { Theme as theme } from './shared';
import TabNavigator from './components/TabNavigator';

const AppContainer = createAppContainer(TabNavigator);

export default () => {
  StatusBar.setBarStyle('light-content', true);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}
