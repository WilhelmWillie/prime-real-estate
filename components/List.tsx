import React, { useEffect } from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

export default ({ listData, appState, emptyListText }) => {
  const keyExtractor = (item, index) => index.toString();

  const renderListItem = (item) => {
    return (
      <ListItem item={item} />
    )
  }

  return (
    <Container>
      {
        (listData.length !== 0) ? (
          <List
            data={listData}
            extraData={appState}
            renderItem={({item}) => renderListItem(item)}
            keyExtractor={keyExtractor}
          />
        ) : (
          <EmptyListLabel>{emptyListText}</EmptyListLabel>
        )
      }
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const List = styled.FlatList`
  width: 100%;
`;

const EmptyListLabel = styled.Text`
  color: #666666;
  font-size: 28;
`;
