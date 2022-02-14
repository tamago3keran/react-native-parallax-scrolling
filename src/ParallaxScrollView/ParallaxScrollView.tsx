import React, { ReactElement, useRef } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { ImageContainer } from '../../src/ImageContainer';
import type { ParallaxScrollViewProps } from './types';

const { width, height } = Dimensions.get('window');
const PARALLAX_IMAGE_HEIGHT = width * 0.618;
const { createAnimatedComponent } = Animated;
const AnimatedScrollView = createAnimatedComponent(ScrollView);

export const ParallaxScrollView = ({
  backgroundImage,
  children,
  foregroundContent,
  parallaxImageHeight = PARALLAX_IMAGE_HEIGHT,
}: ParallaxScrollViewProps): ReactElement => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const animatedEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );
  const animatedBackgroundScale = scrollY.interpolate({
    inputRange: [-height, 0],
    outputRange: [(2 * height + parallaxImageHeight) / parallaxImageHeight, 1],
    extrapolate: 'clamp',
  });
  const animatedBackgroundTranslateY = scrollY.interpolate({
    inputRange: [-height, 0],
    outputRange: [-height, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <AnimatedScrollView
        onScroll={animatedEvent}
        style={styles.scrollViewContainer}
        scrollEventThrottle={16}
      >
        <ImageContainer
          animatedBackgroundScale={animatedBackgroundScale}
          animatedBackgroundTranslateY={animatedBackgroundTranslateY}
          backgroundImage={backgroundImage}
          foregroundContent={foregroundContent}
          imageHeight={parallaxImageHeight}
          imageWidth={width}
        />
        {children}
      </AnimatedScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
});
