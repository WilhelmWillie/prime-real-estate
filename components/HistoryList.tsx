import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import ListItem from './ListItem';
import appStore from '../store';

export default () => {
  const [appState] = appStore();

  const keyExtractor = (item, index) => index.toString();

  const renderHistoryItems = (item) => {
    return (
      <ListItem item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={appState.history}
        extraData={appState}
        renderItem={({item}) => renderHistoryItems(item)}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
});
