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
          source={{
            uri: 'https://s.gravatar.com/avatar/41c9dedd1b4c53ace82e040bb09334fe',
          }}
        />
        <View style={styles.foregroundTextContainer}>
          <Text style={styles.foregroundText}>tamago3keran</Text>
        </View>
      </View>
    );
  };

  return (
    <ParallaxScrollView
      imageSource={{
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
