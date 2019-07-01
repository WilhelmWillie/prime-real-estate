import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import useAppStore from '../store';

export default () => {
  const [appState, appActions] = useAppStore();

  const handlePress = () => {
    appActions.scan.getResult()
  }

  return (
    <TouchableHighlight onPress={handlePress} style={styles.container} underlayColor='#ededed'>
      <Text style={styles.buttonText}>Scan</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '80%',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    borderRadius: 999,
    zIndex: 10,
    bottom: -30,
  },
  buttonText: {
    color: '#FFA25D',
    fontSize: 18,
  }
});
