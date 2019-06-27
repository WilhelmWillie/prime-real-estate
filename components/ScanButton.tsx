import React, { useContext } from 'react';
import { Button } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState, appActions] = appStore();

  const handlePress = () => {
    appActions.scan.getResult()
  }

  return (
    <Button onPress={handlePress} title='Scan' />
  )
}
