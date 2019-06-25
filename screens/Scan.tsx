import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { ScanButton } from '../components';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Scan your location for Prime Real Estate</Text>
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
