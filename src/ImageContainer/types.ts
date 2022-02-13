import type { ReactElement } from 'react';
import type { Animated, ImageSourcePropType } from 'react-native';

export interface ImageContainerProps {
  animatedBackgroundScale: Animated.AnimatedInterpolation;
  animatedBackgroundTranslateY: Animated.AnimatedInterpolation;
  backgroundImage: ImageSourcePropType;
  foregroundContent?: ReactElement;
  imageHeight: number;
  imageWidth: number;
}
