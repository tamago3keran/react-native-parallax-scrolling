import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ParallaxScrollView } from 'react-native-parallax-scrolling';

const { width } = Dimensions.get('window');
const PARALLAX_IMAGE_HEIGHT = width * 0.618;

export default function App() {
  const renderForegroundContent = () => {
    return (
      <View style={styles.foregroundContainer}>
        <Image
          style={styles.avatarImage}
          source={require('../assets/avatar.png')}
        />
        <View style={styles.foregroundTextContainer}>
          <Text style={styles.foregroundText}>tamago3keran</Text>
        </View>
      </View>
    );
  };

  return (
    <ParallaxScrollView
      foregroundContent={renderForegroundContent()}
      foregroundFadeOutSpeed={3}
      imageOverlayColor="black"
      imageOverlayOpacity={0.3}
      imageSource={require('../assets/background.png')}
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
    height: PARALLAX_IMAGE_HEIGHT,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  foregroundTextContainer: {
    paddingTop: 8,
  },
  foregroundText: {
    fontSize: 20,
    color: 'white',
  },
});
