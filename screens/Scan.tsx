import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import appStore from '../store';

import { ScanHero, ScanResult } from '../components';

export default () => {
  const appState = appStore()[0];
  const { result } = appState;

  return (
    <View style={styles.container}>
      <ScanHero result={result} />
      <ScanResult result={result} />
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
