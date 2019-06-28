import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback as Touchable, Text, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

import appStore from '../store';

const ListItem = ({navigation, item}) => {
  const appActions = appStore()[1];

  const handlePress = () => {
    appActions.listItem.viewResult(item);
    navigation.navigate('Scan');
  }

  return (
    <Touchable onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.neighborhood}>{item.neighborhood}</Text>
        <Text style={styles.street}>{item.street}</Text>
        <Text style={styles.avgValue}>{item.avgValue}</Text>
      </View>
    </Touchable>
  )
}

export default withNavigation(ListItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    padding: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 12,
    marginBottom: 12,
  },
  neighborhood: {
    fontSize: 22,
    textTransform: 'uppercase',
    marginBottom: 16,
    color: '#666666',
  },
  street: {
    fontSize: 18,
    fontWeight: '200',
    marginBottom: 16,
    color: '#797979',
  },
  avgValue: {
    fontSize: 32,
    fontWeight: '200',
    color: '#256CE1'
  }
})
