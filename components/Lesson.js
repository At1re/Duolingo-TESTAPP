import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lesson() {
  const handleStartLesson = () => {
    // Implement lesson start logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Start a Lesson:</Text>
      <Button title="Start Lesson" onPress={handleStartLesson} />
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
});