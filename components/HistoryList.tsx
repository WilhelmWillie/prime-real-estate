import React from 'react';
import { Text, FlatList } from 'react-native';

interface HistoryItem {
  key: string,
  address: string,
  avgValue: number
}

export default () => {
  const renderHistoryItems = (item: HistoryItem) => {
    return (<Text>{item.avgValue}</Text>)
  }

  return (
    <FlatList
      data={[
        {
          key: 'ITEM-0',
          address: '1234 Main Street',
          avgValue: 1200000
        },
        {
          key: 'ITEM-1',
          address: '4321 Big Avenue',
          avgValue: 1000000
        }
      ]}
      renderItem={({item}) => renderHistoryItems(item)}
    />
  )
}
