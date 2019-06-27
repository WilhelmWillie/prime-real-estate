import React from 'react';
import { Text, FlatList } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState] = appStore();

  const keyExtractor = (item, index) => index.toString();

  const renderLikedItems = (item) => {
    return (<Text>{item.neighborhood} {item.street} {item.avgValue}</Text>)
  }

  return (
    <FlatList
      data={appState.liked}
      extraData={appState}
      renderItem={({item}) => renderLikedItems(item)}
      keyExtractor={keyExtractor}
    />
  )
}
