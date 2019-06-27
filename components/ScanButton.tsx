import React, { useContext } from 'react';
import { Button } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState, appActions] = appStore();

  const handlePress = () => {
    appActions.scan.setResult({
      neighborhood: 'Mission District',
      street: 'Valencia Street',
      avgValue: 12345
    })
  }

  return (
    <Button onPress={handlePress} title='Scan' />
  )
}
 
