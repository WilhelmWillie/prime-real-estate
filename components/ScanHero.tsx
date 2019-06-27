import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Scan your location for Prime Real Estate</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '40%',
    paddingTop: 30,
    color: 'white',
    backgroundColor: '#FFA25D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: 'white',
    fontSize: 16,
  },
});
