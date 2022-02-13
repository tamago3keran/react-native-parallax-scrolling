import type { ReactElement } from 'react';
import type { ImageSourcePropType } from 'react-native';

export interface ParallaxScrollViewProps {
  backgroundImage: ImageSourcePropType;
  children: ReactElement;
  foregroundContent?: ReactElement;
  parallaxImageHeight?: number;
}
