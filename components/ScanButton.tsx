import React from 'react';
import styled from 'styled-components';

import useAppStore from '../store';

export default () => {
  const appActions = useAppStore()[1];

  const handlePress = () => {
    appActions.scan.getResult()
  }

  return (
    <Container onPress={handlePress} underlayColor='#ededed'>
      <ButtonLabel>Scan</ButtonLabel>
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
