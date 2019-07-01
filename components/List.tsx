import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import ListItem from './ListItem';

export default ({ listData, appState, emptyListText }) => {
  const keyExtractor = (item, index) => index.toString();

  const renderListItem = (item) => {
    return (
      <ListItem item={item} />
    )
  }

  return (
    <View style={styles.container}>
      {
        (listData.length !== 0) ? (
          <FlatList
            data={listData}
            extraData={appState}
            renderItem={({item}) => renderListItem(item)}
            keyExtractor={keyExtractor}
            style={styles.list}
          />
        ) : (
          <Text style={styles.emptyListText}>{emptyListText}</Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%'
  },
  emptyListText: {
    color: '#666666',
    fontSize: 28
  }
});
