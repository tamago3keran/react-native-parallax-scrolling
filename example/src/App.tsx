import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ParallaxScrollView } from 'react-native-parallax-scrolling';

const { width } = Dimensions.get('window');

export default function App() {
  const renderForegroundContent = () => {
    return (
      <View style={styles.foregroundContainer}>
        <View style={styles.foregroundTextContainer}>
          <Text style={styles.foregroundText}>Foreground Text</Text>
        </View>
      </View>
    );
  };

  return (
    <ParallaxScrollView
      backgroundImage={{
        uri: 'https://i.pinimg.com/originals/3c/24/48/3c2448e7829710ba7dc0f3743f101219.png',
      }}
      foregroundContent={renderForegroundContent()}
    >
      <View style={styles.contentContainer}>
        <Text>Hello, World!</Text>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    height: 2000,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  foregroundContainer: {
    width: width,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  foregroundTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foregroundText: {
    fontSize: 20,
    color: 'white',
  },
});
