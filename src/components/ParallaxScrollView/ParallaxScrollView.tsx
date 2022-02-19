import React, { ReactElement, useRef } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { ImageContainer } from '../ImageContainer';
import { FixedHeaderContainer } from '../FixedHeaderContainer';
import type { ParallaxScrollViewProps } from './types';
import {
  animatedBackgroundScale,
  animatedBackgroundTranslateY,
  animatedForegroundOpacity,
  animatedFixedHeaderOpacity,
} from '../../utils';

const { width, height } = Dimensions.get('window');
const PARALLAX_IMAGE_HEIGHT = width * 0.618;
const { createAnimatedComponent } = Animated;
const AnimatedScrollView = createAnimatedComponent(ScrollView);

export const ParallaxScrollView = ({
  children,
  fixedHeader,
  fixedHeaderFadeSpeed,
  foregroundContent,
  foregroundFadeOutSpeed,
  headerHeight,
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

  const renderFixedHeader = () => {
    if (!fixedHeader || !headerHeight) return null;
    return (
      <FixedHeaderContainer
        animatedFixedHeaderOpacity={animatedFixedHeaderOpacity(
          scrollY,
          fixedHeaderFadeSpeed,
          headerHeight,
          imageHeight
        )}
        headerHeight={headerHeight}
      >
        {fixedHeader}
      </FixedHeaderContainer>
    );
  };

  return (
    <View style={styles.container}>
      {renderFixedHeader()}
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
