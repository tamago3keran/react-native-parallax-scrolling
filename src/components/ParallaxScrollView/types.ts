import type { ReactElement } from 'react';
import type { ImageSourcePropType } from 'react-native';

export interface ParallaxScrollViewProps {
  children: ReactElement;
  fixedHeader?: ReactElement;
  fixedHeaderFadeSpeed?: number;
  foregroundContent?: ReactElement;
  foregroundFadeOutSpeed?: number;
  headerHeight?: number;
  imageHeight?: number;
  imageOverlayColor?: string;
  imageOverlayOpacity?: number;
  imageSource: ImageSourcePropType;
}
