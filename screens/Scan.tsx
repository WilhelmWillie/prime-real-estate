import React from 'react';
import useAppStore from '../store';

import { ScreenContainer, ScanHero, ScanResult } from '../components';

export default () => {
  const appState = useAppStore()[0];
  const { result } = appState;

  return (
    <ScreenContainer>
      <ScanHero result={result} />
      <ScanResult result={result} />
    </ScreenContainer>
  )
}
