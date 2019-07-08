import React from 'react';
import { StatusBar, Image, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, BottomTabBar } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';

import { Scan, History, Liked } from './screens';
import { Theme as theme } from './shared';

import { scan } from './assets';

const TabIcon = ({ tab }) => {
  if (tab === 'history') {
    return <FontAwesome name="history" size={32} color='#AEAEAE' />
  } else if (tab === 'liked') {
    return <FontAwesome name="heart" size={32} color='#AEAEAE' />
  } else if (tab === 'scan') {
    return (
      <View
        style={{
          backgroundColor: '#FF9D55',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          paddingHorizontal: 30,
          borderTopStartRadius: 8,
          borderTopEndRadius: 8,
        }}
      >
        <Image source={scan} width={32} height={32} />
      </View>
    );
  }

  return null;
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
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 80,
      paddingVertical: 5,
      borderTopColor: 'transparent',
      shadowOffset: {
        width: 0,
        height: -3
      },
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 5
    }
  },
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
