import React, { useContext } from 'react';
import { Button } from 'react-native';

import AppContext from '../contexts/AppContext';

export default () => {
  const appContext = useContext(AppContext);

  return (
    <Button onPress={() => {}} title='Scan' />
  )
}
