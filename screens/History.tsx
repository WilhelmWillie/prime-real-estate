import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScreenHeader, List } from '../components';
import appStore from '../store';

export default () => {
  const [appState] = appStore();

  return (
    <View style={styles.container}>
      <ScreenHeader title="Liked" />
      <List listData={appState.liked} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
