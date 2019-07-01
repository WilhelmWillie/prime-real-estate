import React from 'react';
import { TouchableWithoutFeedback as Touchable } from 'react-native';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

import useAppStore from '../store';

const ListItem = ({navigation, item}) => {
  const appActions = useAppStore()[1];

  const handlePress = () => {
    appActions.listItem.viewResult(item);
    navigation.navigate('Scan');
  }

  return (
    <Touchable onPress={handlePress}>
      <Container>
        <NeighborhoodLabel>{item.neighborhood}</NeighborhoodLabel>
        <StreetLabel>{item.street}</StreetLabel>
        <AvgValueLabel>{item.avgValue}</AvgValueLabel>
      </Container>
    </Touchable>
  )
}

export default withNavigation(ListItem);

const Container = styled.View`
  background-color: ${p => p.theme.colors.white};
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
  padding: 24px;
  margin: 12px 24px;
`;

const NeighborhoodLabel = styled.Text`
  font-size: 22;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #666666;
`;

const StreetLabel = styled.Text`
  font-size: 18;
  font-weight: 200;
  margin-bottom: 16px;
  color: #797979;
`;

const AvgValueLabel = styled.Text`
  font-size: 32;
  font-weight: 200;
  color: ${p => p.theme.colors.secondary};
`;
