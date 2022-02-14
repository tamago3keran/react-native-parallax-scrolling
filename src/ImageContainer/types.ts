import type { ReactElement } from 'react';
import type { Animated, ImageSourcePropType } from 'react-native';

export interface ImageContainerProps {
  animatedBackgroundScale: Animated.AnimatedInterpolation;
  animatedBackgroundTranslateY: Animated.AnimatedInterpolation;
  foregroundContent?: ReactElement;
  imageHeight: number;
  imageOverlayColor?: string;
  imageOverlayOpacity?: number;
  imageSource: ImageSourcePropType;
  imageWidth: number;
}
