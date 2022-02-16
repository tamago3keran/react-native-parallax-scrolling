import type { ReactElement } from 'react';
import type { ImageSourcePropType } from 'react-native';

export interface ParallaxScrollViewProps {
  children: ReactElement;
  foregroundContent?: ReactElement;
  foregroundFadeOutSpeed?: number;
  imageHeight?: number;
  imageOverlayColor?: string;
  imageOverlayOpacity?: number;
  imageSource: ImageSourcePropType;
}
