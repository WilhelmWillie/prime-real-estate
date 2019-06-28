import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ScreenHeader, HistoryList } from '../components';

export default () => (
  <View style={styles.container}>
    <ScreenHeader title="History" />
    <HistoryList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});