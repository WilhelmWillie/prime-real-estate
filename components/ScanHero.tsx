import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ScanButton from './ScanButton';

export default ({ result }) => {
  return (
    <View style={styles(result).container}>
      <Text style={styles(result).description}>{result ? 'Scan Result' : 'Prime Real Estate'}</Text>

      <ScanButton />
    </View>
  )
}

const styles = (hasResult: boolean) => StyleSheet.create({
  container: {
    width: '100%',
    height: hasResult ? '34%' : '50%',
    paddingTop: 30,
    color: 'white',
    backgroundColor: '#FFA25D',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
  },
  description: {
    color: 'white',
    fontSize: 34,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
