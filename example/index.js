import React from 'react';
import { registerRootComponent } from 'expo';
import Main from './src/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
};

registerRootComponent(App);
