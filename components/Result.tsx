import React from 'react';
import { Text } from 'react-native';

export default ({result}) => (
  <Text>{result.neighborhood} {result.street} {result.avgValue}</Text>
)
