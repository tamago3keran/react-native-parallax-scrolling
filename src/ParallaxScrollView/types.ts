import type { ReactElement } from 'react';
import type { ImageSourcePropType } from 'react-native';

export interface ParallaxScrollViewProps {
  children: ReactElement;
  foregroundContent?: ReactElement;
  imageHeight?: number;
  imageSource: ImageSourcePropType;
}
