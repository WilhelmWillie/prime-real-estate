import React from 'react';
import { Text, FlatList } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState, appActions] = appStore();

  const renderLikedItems = (item) => {
    return (<Text>{item.address} {item.avgValue}</Text>)
  }

  return (
    <FlatList
      data={appState.liked}
      renderItem={({item}) => renderLikedItems(item)}
    />
  )
}
