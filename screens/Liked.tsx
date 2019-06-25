import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LikedList } from '../components';

export default () => (
  <View style={styles.container}>
    <Text>Liked Screen</Text>

    <LikedList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
