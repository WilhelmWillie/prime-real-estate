import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { ScanButton } from '../components';

import AppContext from '../contexts/AppContext';

export default () => {
  const appContext = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text>Scan your location for Prime Real Estate</Text>
      <Text>{appContext.result && appContext.result.neighborhood}</Text>
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
