import React, { ReactElement, useRef } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { ImageContainer } from '../ImageContainer';
import type { ParallaxScrollViewProps } from './types';

const { width, height } = Dimensions.get('window');
const PARALLAX_IMAGE_HEIGHT = width * 0.618;
const { createAnimatedComponent } = Animated;
const AnimatedScrollView = createAnimatedComponent(ScrollView);

export const ParallaxScrollView = ({
  children,
  foregroundContent,
  foregroundFadeOutSpeed,
  imageHeight = PARALLAX_IMAGE_HEIGHT,
  imageOverlayColor,
  imageOverlayOpacity,
  imageSource,
}: ParallaxScrollViewProps): ReactElement => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const animatedEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );
  const animatedBackgroundScale = scrollY.interpolate({
    inputRange: [-height, 0],
    outputRange: [(2 * height + imageHeight) / imageHeight, 1],
    extrapolate: 'clamp',
  });
  const animatedBackgroundTranslateY = scrollY.interpolate({
    inputRange: [-height, 0],
    outputRange: [-height, 0],
    extrapolate: 'clamp',
  });
  const animatedForegroundOpacity = foregroundFadeOutSpeed
    ? scrollY.interpolate({
        inputRange: [0, imageHeight / foregroundFadeOutSpeed],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      })
    : 1;

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
          animatedForegroundOpacity={animatedForegroundOpacity}
          foregroundContent={foregroundContent}
          imageHeight={imageHeight}
          imageOverlayColor={imageOverlayColor}
          imageOverlayOpacity={imageOverlayOpacity}
          imageSource={imageSource}
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
