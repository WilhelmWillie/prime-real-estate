import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import ListItem from './ListItem';
import appStore from '../store';

export default () => {
  const [appState] = appStore();

  const keyExtractor = (item, index) => index.toString();

  const renderLikedItems = (item) => {
    return (
      <ListItem item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={appState.liked}
        extraData={appState}
        renderItem={({item}) => renderLikedItems(item)}
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
