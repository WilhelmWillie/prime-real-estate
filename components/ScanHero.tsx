import React, { useEffect, useState } from 'react';
import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components';

import ScanButton from './ScanButton';

const DEFAULT_HEIGHT = 50;
const RESULT_HEIGHT = 34;
const ANIMATION_DURATION = 400;

export default ({ result, loading }) => {
  const heightAnim = useState(new Animated.Value(DEFAULT_HEIGHT))[0];

  useEffect(() => {
    if (!loading) {
      if (result) {
        Animated.timing(
          heightAnim,
          {
            toValue: RESULT_HEIGHT,
            duration: ANIMATION_DURATION
          }
        ).start()
      }
    } else {
     Animated.timing(
       heightAnim,
       {
         toValue: DEFAULT_HEIGHT,
         duration: ANIMATION_DURATION
       }
     ).start()
    }
  }, [result ? 1 : 0, loading ? 1 : 0]);

  return (
    <Animated.View style={{
      ...styles.container,
      height: heightAnim.interpolate({
        inputRange: [RESULT_HEIGHT, DEFAULT_HEIGHT],
        outputRange: [`${RESULT_HEIGHT}%`, `${DEFAULT_HEIGHT}%`]
      })
    }}>
      <HeroLabel>{result ? 'Scan Result' : 'Prime Real Estate'}</HeroLabel>

      <ScanButton loading={loading} />
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
  }
});

const HeroLabel = styled.Text`
  color: ${p => p.theme.colors.white};
  fontSize: 34;
  fontWeight: 700;
  textTransform: uppercase;
`;
