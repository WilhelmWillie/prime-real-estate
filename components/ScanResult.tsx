import React from 'react';
import styled from 'styled-components/native';
import { Share, ActivityIndicator, View } from 'react-native';

import useAppStore from '../store';
import formatCurrency from '../utils/formatCurrency';

export default ({ result, loading }) => {
  const appActions = useAppStore()[1];

  const handleLikePress = () => {
    appActions.like.likeItem(result);
  }

  const handleSharePress = async () => {
    try {
      await Share.share({
        message: `I just scanned my location using Prime Real Estate and found out that the average home price in ${result.neighborhood} is ${formatCurrency(result.avgValue)}!`
      });
    } catch (error) {
      alert(error.message);
    }
  }

  const renderResultCard = () => {
    return result ? (
      <Card>
        <NeighborhoodLabel>{result.neighborhood}</NeighborhoodLabel>
        <StreetLabel>{result.street}</StreetLabel>
        <AvgValueHeaderLabel>Average Home Price</AvgValueHeaderLabel>
        <AvgValueLabel>{formatCurrency(result.avgValue)}</AvgValueLabel>

        <ActionButtonContainer>
          <ActionButton onPress={handleLikePress} underlayColor='#ededed'>
            <ActionButtonText>{ result.liked ? 'Liked' : 'Like'}</ActionButtonText>
          </ActionButton>

          <ActionButton onPress={handleSharePress} underlayColor='#ededed'>
            <ActionButtonText>Share</ActionButtonText>
          </ActionButton>
        </ActionButtonContainer>
      </Card>
    ) : (
      <NoResultLabel>Find the average housing prices of properties in your area</NoResultLabel>
    )
  }

  const renderLoading = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#666666" />
      </View>
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
  margin-bottom: 12px;
`;

const StreetLabel = styled.Text`
  font-size: 30;
  color: #666666;
  font-weight: 200;
  margin-bottom: 12px;
`;

const AvgValueHeaderLabel = styled.Text`
  font-size: 20;
  text-transform: uppercase;
  color: #A5A5A5;
  margin-bottom: 12px;
`;

const AvgValueLabel = styled.Text`
  font-size: 48;
  color: #256CE1;
  font-weight: 100;
`;

const ActionButtonContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

const ActionButton = styled.TouchableHighlight`
  flex: 1;
  background-color: #FFFFFF;
  border-width: 1px
  border-color: #666666;
  border-radius: 16px;
  margin-left: 12px;
  margin-right: 12px;
  padding: 12px 16px;
`;

const ActionButtonText = styled.Text`
  color: #666666;
  text-align: center;
`;

const NoResultLabel = styled.Text`
  color: #666666;
  font-size: 28;
  width: 70%;
  text-align: center;
`
