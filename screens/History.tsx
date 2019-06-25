import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HistoryList } from '../components';

export default () => (
  <View style={styles.container}>
    <Text>History Screen</Text>

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
