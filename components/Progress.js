import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Progress() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Your Progress:</Text>
      <Text style={styles.progress}>Level 1 - 50%</Text>
      {/* Implement dynamic progress tracking */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  progress: {
    fontSize: 16,
  },
});