import React from 'react';
import { Text, FlatList } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState, appActions] = appStore();

  const renderHistoryItems = (item) => {
    return (<Text>{item.address} {item.avgValue}</Text>)
  }

  return (
    <FlatList
      data={appState.history}
      renderItem={({item}) => renderHistoryItems(item)}
    />
  )
}
