import React from 'react';
import styled from 'styled-components';

export default ({ title }) => {
  return (
    <Container>
      <TitleLabel>{title}</TitleLabel>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  padding-top: 60;
  padding-bottom: 30;
  color: ${p => p.theme.colors.white};
  background-color: #FFA25D;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
`;

const TitleLabel = styled.Text`
  color: ${p => p.theme.colors.white};
  font-size: 34;
  font-weight: 700;
  text-transform: uppercase;
`;
