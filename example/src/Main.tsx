import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { ParallaxScrollView } from 'react-native-parallax-scrolling';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const HEADER_HEIGHT = 90;
const PARALLAX_IMAGE_HEIGHT = width * 0.618;

export default function Main() {
  const insets = useSafeAreaInsets();

  const renderFixedHeader = () => {
    return (
      <View style={[styles.fixedHeader, { paddingTop: insets.top }]}>
        <Text style={styles.fixedHeaderText} onPress={() => {}}>
          Scroll to top
        </Text>
      </View>
    );
  };

  const renderForegroundContent = () => {
    return (
      <View style={[styles.foregroundContainer, { paddingTop: insets.top }]}>
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
      fixedHeader={renderFixedHeader()}
      foregroundContent={renderForegroundContent()}
      foregroundFadeOutSpeed={3}
      headerHeight={HEADER_HEIGHT}
      imageHeight={PARALLAX_IMAGE_HEIGHT}
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
  fixedHeader: {
    width: width,
    height: HEADER_HEIGHT,
    paddingRight: 8,
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  fixedHeaderText: {
    color: 'lightgray',
    fontSize: 16,
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
