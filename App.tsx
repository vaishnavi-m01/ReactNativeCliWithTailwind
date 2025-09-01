import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import StackScreen from './src/navigation/StackScreen';

enableScreens(); 

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
