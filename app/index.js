import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LanguageSelection from '../components/LanguageSelection';
import Lesson from '../components/Lesson';
import Progress from '../components/Progress';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Duolingo MVP</Text>
      <LanguageSelection />
      <Lesson />
      <Progress />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});