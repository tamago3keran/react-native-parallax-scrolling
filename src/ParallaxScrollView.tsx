import React, { ReactElement, useRef } from 'react';
import {
  Animated,
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import type { ParallaxScrollViewProps } from './types';

const { width, height } = Dimensions.get('window');
const BACKGROUND_IMAGE_HEIGHT = width * 0.618;
const { createAnimatedComponent } = Animated;
const AnimatedScrollView = createAnimatedComponent(ScrollView);
const AnimatedBackground = createAnimatedComponent(ImageBackground);
const AnimatedForeground = createAnimatedComponent(View);

export const ParallaxScrollView = ({
  backgroundImage,
  children,
  foregroundContent,
  parallaxImageHeight = BACKGROUND_IMAGE_HEIGHT,
}: ParallaxScrollViewProps): ReactElement => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const animatedEvent = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );
  const animatedBackgroundTranslateY = scrollY.interpolate({
    inputRange: [-height, 0],
    outputRange: [-height, 0],
    extrapolate: 'clamp',
  });
  const animatedBackgroundScale = scrollY.interpolate({
    inputRange: [-height, 0],
    outputRange: [(2 * height + parallaxImageHeight) / parallaxImageHeight, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <AnimatedScrollView
        onScroll={animatedEvent}
        style={styles.scrollViewContainer}
        scrollEventThrottle={16}
      >
        <View
          style={[
            styles.parallaxImageContainer,
            { height: parallaxImageHeight },
          ]}
        >
          <AnimatedBackground
            style={[
              styles.parallaxImageInnerContainer,
              styles.backgroundContainer,
              {
                height: parallaxImageHeight,
                transform: [
                  { translateY: animatedBackgroundTranslateY },
                  { scale: animatedBackgroundScale },
                ],
              },
            ]}
            source={backgroundImage}
          />
          <AnimatedForeground
            style={[
              styles.parallaxImageInnerContainer,
              styles.foregroundContainer,
              { height: parallaxImageHeight },
            ]}
          >
            {foregroundContent}
          </AnimatedForeground>
        </View>
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
  parallaxImageContainer: {
    width: width,
  },
  parallaxImageInnerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  backgroundContainer: {
    zIndex: 0,
  },
  foregroundContainer: {
    zIndex: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
