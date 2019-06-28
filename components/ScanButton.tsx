import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState, appActions] = appStore();

  const handlePress = () => {
    appActions.scan.getResult()
  }

  return (
    <View style={styles.container}>
      <Button onPress={handlePress} title='Scan' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '80%',
    height: 60,
    color: 'white',
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
});
