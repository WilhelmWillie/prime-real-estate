import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 60,
    paddingBottom: 30,
    color: 'white',
    backgroundColor: '#FFA25D',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
  },
  title: {
    color: 'white',
    fontSize: 34,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
