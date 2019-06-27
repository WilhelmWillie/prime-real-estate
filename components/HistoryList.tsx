import React, { useEffect } from 'react';
import { Text, FlatList } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState] = appStore();

  const keyExtractor = (item, index) => index.toString();

  const renderHistoryItems = (item) => {
    return (<Text>{item.neighborhood} {item.street} {item.avgValue}</Text>)
  }

  return (
    <FlatList
      data={appState.history}
      extraData={appState}
      renderItem={({item}) => renderHistoryItems(item)}
      keyExtractor={keyExtractor}
    />
  )
}
