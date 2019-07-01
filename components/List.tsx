import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import ListItem from './ListItem';

export default ({ listData, appState }) => {
  const keyExtractor = (item, index) => index.toString();

  const renderListItem = (item) => {
    return (
      <ListItem item={item} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        extraData={appState}
        renderItem={({item}) => renderListItem(item)}
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
