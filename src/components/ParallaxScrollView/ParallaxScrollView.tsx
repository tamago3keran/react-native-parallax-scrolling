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
import {
  animatedBackgroundScale,
  animatedBackgroundTranslateY,
  animatedForegroundOpacity,
} from '../../utils';

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

  return (
    <View style={styles.container}>
      <AnimatedScrollView
        onScroll={animatedEvent}
        style={styles.scrollViewContainer}
        scrollEventThrottle={16}
      >
        <ImageContainer
          animatedBackgroundScale={animatedBackgroundScale(
            scrollY,
            height,
            imageHeight
          )}
          animatedBackgroundTranslateY={animatedBackgroundTranslateY(
            scrollY,
            height
          )}
          animatedForegroundOpacity={animatedForegroundOpacity(
            scrollY,
            foregroundFadeOutSpeed,
            imageHeight
          )}
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
