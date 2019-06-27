import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

import appStore from '../store';

export default () => {
  const [appState, appActions] = appStore();

  const keyExtractor = (item, index) => index.toString();

  const renderHistoryItems = (item) => {
    return (
      <View>
        <Text>{item.neighborhood} {item.street} {item.avgValue}</Text>
        <Button onPress={()=>{ appActions.like.likeItem(item)}} title="Like" />
      </View>
    )
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
