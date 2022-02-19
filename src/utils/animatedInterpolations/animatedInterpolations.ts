import type { Animated } from 'react-native';

export const animatedBackgroundScale = (
  scrollY: Animated.Value,
  windowHeight: number,
  imageHeight: number
) => {
  return scrollY.interpolate({
    inputRange: [-windowHeight, 0],
    outputRange: [(2 * windowHeight + imageHeight) / imageHeight, 1],
    extrapolate: 'clamp',
  });
};

export const animatedBackgroundTranslateY = (
  scrollY: Animated.Value,
  windowHeight: number
) => {
  return scrollY.interpolate({
    inputRange: [-windowHeight, 0],
    outputRange: [-windowHeight, 0],
    extrapolate: 'clamp',
  });
};

export const animatedForegroundOpacity = (
  scrollY: Animated.Value,
  foregroundFadeOutSpeed?: number,
  imageHeight?: number
) => {
  if (!foregroundFadeOutSpeed || !imageHeight) return 1;
  return scrollY.interpolate({
    inputRange: [0, imageHeight / foregroundFadeOutSpeed],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
};

export const animatedFixedHeaderOpacity = (
  scrollY: Animated.Value,
  fadeSpeed?: number,
  headerHeight?: number,
  imageHeight?: number
) => {
  if (!fadeSpeed || !imageHeight || !headerHeight) return 1;
  return scrollY.interpolate({
    inputRange: [0, imageHeight - headerHeight / fadeSpeed],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
};
