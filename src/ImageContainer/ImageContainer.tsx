import React, { ReactElement } from 'react';
import { Animated, ImageBackground, StyleSheet, View } from 'react-native';
import type { ImageContainerProps } from './types';

const { createAnimatedComponent } = Animated;
const AnimatedBackground = createAnimatedComponent(ImageBackground);
const AnimatedForeground = createAnimatedComponent(View);

export const ImageContainer = ({
  animatedBackgroundScale,
  animatedBackgroundTranslateY,
  backgroundImage,
  foregroundContent,
  imageHeight,
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
        source={backgroundImage}
      />
      <AnimatedForeground
        style={[
          styles.innerContainer,
          styles.foregroundContainer,
          { height: imageHeight },
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
  foregroundContainer: {
    zIndex: 1,
  },
});
