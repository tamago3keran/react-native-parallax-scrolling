import React, { ReactElement } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import type { FixedHeaderContainerProps } from './types';

const { createAnimatedComponent } = Animated;
const AnimatedView = createAnimatedComponent(View);

export const FixedHeaderContainer = ({
  animatedFixedHeaderOpacity,
  children,
  headerHeight,
}: FixedHeaderContainerProps): ReactElement => {
  return (
    <AnimatedView
      style={[
        styles.container,
        { height: headerHeight, opacity: animatedFixedHeaderOpacity },
      ]}
    >
      {children}
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
});
