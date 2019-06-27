import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import appStore from '../store';

import { Result, ScanButton } from '../components';

export default () => {
  const [appState, appActions] = appStore();
  const { result } = appState;

  return (
    <View style={styles.container}>
      <Text>Scan your location for Prime Real Estate</Text>
      <Result result={result} />
      <ScanButton />
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
