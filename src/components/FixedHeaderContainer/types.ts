import type { ReactElement } from 'react';
import type { Animated } from 'react-native';

export interface FixedHeaderContainerProps {
  animatedFixedHeaderOpacity: Animated.AnimatedInterpolation | number;
  children: ReactElement;
  headerHeight: number;
}
