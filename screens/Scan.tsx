import React, { useEffect } from 'react';

import * as Permissions from 'expo-permissions';

import useAppStore from '../store';

import { ScreenContainer, ScanHero, ScanResult } from '../components';

export default () => {
  const [appState, appActions] = useAppStore();
  const { result, loading } = appState;

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      appActions.location.setLocationPermissions(false);
    }
  }

  return (
    <ScreenContainer>
      <ScanHero result={result} loading={loading} />
      <ScanResult result={result} loading={loading} />
    </ScreenContainer>
  )
}
