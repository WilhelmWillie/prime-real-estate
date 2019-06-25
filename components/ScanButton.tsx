import React from 'react';
import { Button } from 'react-native';

export default () => {
  return (
    <Button onPress={() => console.log('Scan Button')} title='Scan' />
  )
}
