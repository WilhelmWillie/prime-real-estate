import React from 'react';

import { ScreenContainer, ScreenHeader, List } from '../components';
import useAppStore from '../store';

export default () => {
  const [appState] = useAppStore();

  return (
    <ScreenContainer>
      <ScreenHeader title="History" />
      <List listData={appState.history} appState={appState} emptyListText="You haven't scanned any neighborhoods"/>
    </ScreenContainer>
  )
}
