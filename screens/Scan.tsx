import React from 'react';
import useAppStore from '../store';

import { ScreenContainer, ScanHero, ScanResult } from '../components';

export default () => {
  const appState = useAppStore()[0];
  const { result, loading } = appState;

  return (
    <ScreenContainer>
      <ScanHero result={result} loading={loading} />
      <ScanResult result={result} loading={loading} />
    </ScreenContainer>
  )
}
