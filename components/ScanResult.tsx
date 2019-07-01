import React from 'react';
import styled from 'styled-components';

import useAppStore from '../store';

export default ({result}) => {
  const appActions = useAppStore()[1];

  const handleLikePress = () => {
    appActions.like.likeItem(result);
  }

  return (
    <Container>
      {
        result ? (
          <Card>
            <NeighborhoodLabel>{result.neighborhood}</NeighborhoodLabel>
            <StreetLabel>{result.street}</StreetLabel>
            <AvgValueHeaderLabel>Average Home Price</AvgValueHeaderLabel>
            <AvgValueLabel>{result.avgValue}</AvgValueLabel>

            <LikeButton onPress={handleLikePress} title="Like" />
          </Card>
        ) : (
          <NoResultLabel>Scan to find nearby housing prices</NoResultLabel>
        )
      }
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.View`
  background-color: #FFFFFF;
  padding: 32px;
  flex: 1;
  width: 100%;
  margin-top: 30px;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.18);
  align-items: center;
  justify-content: center;
`;

const NeighborhoodLabel = styled.Text`
  font-size: 32;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 16px;
`;

const StreetLabel = styled.Text`
  font-size: 30;
  color: #666666;
  font-weight: 200;
  margin-bottom: 16px;
`;

const AvgValueHeaderLabel = styled.Text`
  font-size: 20;
  text-transform: uppercase;
  color: #A5A5A5;
  margin-bottom: 16px;
`;

const AvgValueLabel = styled.Text`
  font-size: 48;
  color: #256CE1;
  font-weight: 100;
`;

const LikeButton = styled.Button`
`;

const NoResultLabel = styled.Text`
  color: #666666;
  font-size: 28;
`
