import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import HomeScreen from './components/screens/HomeScreen';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

const Stack = createNativeStackNavigator();

export default function App() {
  return <ExpoRoot />;
}

registerRootComponent(App);
