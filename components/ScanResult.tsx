import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default ({result}) => (
  <View style={styles.container}>
    {
      result ? (
        <View style={styles.card}>
          <Text style={styles.neighborhood}>{result.neighborhood}</Text>
          <Text style={styles.street}>{result.street}</Text>
          <Text style={styles.avgValueHeader}>Average Home Price</Text>
          <Text style={styles.avgValue}>{result.avgValue}</Text>
        </View>
      ) : (
        <Text>...</Text>
      )
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 32,
    flex: 1,
    width: '100%',
    marginTop: 30,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  neighborhood: {
    fontSize: 32,
    textTransform: 'uppercase',
    color: '#666666',
    marginBottom: 16,
  },
  street: {
    fontSize: 30,
    fontWeight: '200',
    color: '#666666',
    marginBottom: 16,
  },
  avgValueHeader: {
    fontSize: 20,
    color: '#A5A5A5',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  avgValue: {
    fontSize: 48,
    color: '#256CE1',
    fontWeight: '100',
  },
});
