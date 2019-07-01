import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import useAppStore from '../store';

import { ScanHero, ScanResult } from '../components';

export default () => {
  const appState = useAppStore()[0];
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
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
