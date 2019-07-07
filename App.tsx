import React from 'react';
import { StatusBar, Image, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, BottomTabBar } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import { Scan, History, Liked } from './screens';
import { Theme as theme } from './shared';

import { history, like, scan } from './assets';

const TabIcon = ({ tab }) => {
  let iconSource = null;

  switch(tab) {
    case 'history':
      iconSource = history;
      break;
    case 'scan':
      iconSource = scan;
      break;
    case 'liked':
      iconSource = like;
      break;
  }

  return (
    <Image source={iconSource} />
  )
}

const TabNavigator = createBottomTabNavigator({
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: () => <TabIcon tab='history' />
    }
  },
  Scan: {
    screen: Scan,
    navigationOptions: {
      tabBarIcon: () => <TabIcon tab='scan' />
    }
  },
  Liked: {
    screen: Liked,
    navigationOptions: {
      tabBarIcon: () => <TabIcon tab='liked' />
    }
  },
}, {
  initialRouteName: 'Scan',
});

const AppContainer = createAppContainer(TabNavigator);

export default () => {
  StatusBar.setBarStyle('light-content', true);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}
