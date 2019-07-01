import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScreenHeader, List } from '../components';
import useAppStore from '../store';

export default () => {
  const [appState] = useAppStore();

  return (
    <View style={styles.container}>
      <ScreenHeader title="Liked" />
      <List listData={appState.liked} appState={appState} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
