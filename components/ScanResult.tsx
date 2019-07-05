import React from 'react';
import styled from 'styled-components/native';

import useAppStore from '../store';

export default ({ result, loading }) => {
  const appActions = useAppStore()[1];

  const handleLikePress = () => {
    appActions.like.likeItem(result);
  }

  const renderResultCard = () => {
    return result ? (
      <Card>
        <NeighborhoodLabel>{result.neighborhood}</NeighborhoodLabel>
        <StreetLabel>{result.street}</StreetLabel>
        <AvgValueHeaderLabel>Average Home Price</AvgValueHeaderLabel>
        <AvgValueLabel>{result.avgValue}</AvgValueLabel>

        <LikeButton onPress={handleLikePress} underlayColor='#ededed'>
          <LikeButtonText>Like</LikeButtonText>
        </LikeButton>
      </Card>
    ) : (
      <NoResultLabel>Scan to find nearby housing prices</NoResultLabel>
    )
  }

  const renderLoading = () => {
    return (
      <Loading>Scanning...</Loading>
    )
  }

  return (
    <Container>
      {loading ? renderLoading() : renderResultCard()}
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

const LikeButton = styled.TouchableHighlight`
  background-color: #FFFFFF;
  border-width: 1px
  border-color: #666666;
  border-radius: 16px;
  margin-top: 24px;
  padding: 12px 16px;
`;

const LikeButtonText = styled.Text`
  color: #666666;
`;

const Loading = styled.Text`
  color: #666666;
  font-size: 28;
`

const NoResultLabel = styled.Text`
  color: #666666;
  font-size: 28;
`
