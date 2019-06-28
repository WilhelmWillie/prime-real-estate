import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';

import ScanButton from './ScanButton';

export default ({ result }) => {
  const [heightAnim, setHeightAnim] = useState(new Animated.Value(300));

  useEffect(() => {
    if (result) {
      Animated.timing(
        heightAnim,
        {
          toValue: 200,
          duration: 400
        }
      ).start()
    }
  }, [result ? 1 : 0]);

  return (
    <Animated.View style={{
      ...styles(result).container,
      height: heightAnim
    }}>
      <Text style={styles(result).description}>{result ? 'Scan Result' : 'Prime Real Estate'}</Text>

      <ScanButton />
    </Animated.View>
  )
}

// 34 : 50

const styles = (hasResult: boolean) => StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 30,
    color: 'white',
    backgroundColor: '#FFA25D',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
  },
  description: {
    color: 'white',
    fontSize: 34,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
