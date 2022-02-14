import React, { ReactElement } from 'react';
import { Animated, ImageBackground, StyleSheet, View } from 'react-native';
import type { ImageContainerProps } from './types';

const { createAnimatedComponent } = Animated;
const AnimatedBackground = createAnimatedComponent(ImageBackground);
const AnimatedForeground = createAnimatedComponent(View);

export const ImageContainer = ({
  animatedBackgroundScale,
  animatedBackgroundTranslateY,
  animatedForegroundOpacity,
  foregroundContent,
  imageHeight,
  imageOverlayColor,
  imageOverlayOpacity,
  imageSource,
  imageWidth,
}: ImageContainerProps): ReactElement => {
  return (
    <View style={{ height: imageHeight, width: imageWidth }}>
      <AnimatedBackground
        style={[
          styles.innerContainer,
          styles.backgroundContainer,
          {
            height: imageHeight,
            transform: [
              { translateY: animatedBackgroundTranslateY },
              { scale: animatedBackgroundScale },
            ],
          },
        ]}
        source={imageSource}
      >
        <View
          style={[
            styles.backgroundOverlay,
            {
              backgroundColor: imageOverlayColor,
              opacity: imageOverlayOpacity,
            },
          ]}
        />
      </AnimatedBackground>
      <AnimatedForeground
        style={[
          styles.innerContainer,
          styles.foregroundContainer,
          { height: imageHeight, opacity: animatedForegroundOpacity },
        ]}
      >
        {foregroundContent}
      </AnimatedForeground>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
  },
  backgroundContainer: {
    zIndex: 0,
  },
  backgroundOverlay: {
    flex: 1,
  },
  foregroundContainer: {
    zIndex: 1,
  },
});
