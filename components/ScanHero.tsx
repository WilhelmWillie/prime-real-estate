import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated, Text } from 'react-native';

import ScanButton from './ScanButton';

const DEFAULT_HEIGHT = 50;
const RESULT_HEIGHT = 34;
const ANIMATION_DURATION = 400;

export default ({ result }) => {
  const heightAnim = useState(new Animated.Value(DEFAULT_HEIGHT))[0];

  useEffect(() => {
    if (result) {
      Animated.timing(
        heightAnim,
        {
          toValue: RESULT_HEIGHT,
          duration: ANIMATION_DURATION
        }
      ).start()
    }
  }, [result ? 1 : 0]);

  return (
    <Animated.View style={{
      ...styles.container,
      height: heightAnim.interpolate({
        inputRange: [RESULT_HEIGHT, DEFAULT_HEIGHT],
        outputRange: [`${RESULT_HEIGHT}%`, `${DEFAULT_HEIGHT}%`]
      })
    }}>
      <Text style={styles.description}>{result ? 'Scan Result' : 'Prime Real Estate'}</Text>

      <ScanButton />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
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
