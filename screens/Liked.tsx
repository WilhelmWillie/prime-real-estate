import React from 'react';

import { ScreenContainer, ScreenHeader, List } from '../components';
import useAppStore from '../store';

export default () => {
  const [appState] = useAppStore();

  return (
    <ScreenContainer>
      <ScreenHeader title="Liked" />
      <List listData={appState.liked} appState={appState} emptyListText="You haven't liked any results"/>
    </ScreenContainer>
  )
}
