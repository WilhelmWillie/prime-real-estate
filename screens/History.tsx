import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

import { ScreenHeader, List } from '../components';
import useAppStore from '../store';

export default () => {
  const [appState] = useAppStore();

  return (
    <Container>
      <ScreenHeader title="History" />
      <List listData={appState.history} appState={appState} emptyListText="You haven't viewed any results"/>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #F6F6F6;
  align-items: center;
  justify-content: center;
`;
