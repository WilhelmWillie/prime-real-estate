import React from 'react';
import styled from 'styled-components/native';

import useAppStore from '../store';

export default ({ loading }) => {
  const [appState, appActions] = useAppStore();

  const handlePress = async () => {
    // Prevent multiple scans from running
    if (appState.loading) {
      return;
    }

    await appActions.location.getLocation();
    appActions.scan.getResult()
  }

  const buttonText = loading ? 'Scanning' : 'Scan';

  return (
    <Container onPress={handlePress} underlayColor='#ededed'>
      <ButtonLabel>{buttonText}</ButtonLabel>
    </Container>
  )
}

const Container = styled.TouchableHighlight`
  position: absolute;
  width: 80%;
  height: 60px;
  background-color: white;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
  border-radius: 999px;
  z-index: 10;
  bottom: -30px;
`;

const ButtonLabel = styled.Text`
  color: ${p => p.theme.colors.primary};
  font-size: 18;
`;
