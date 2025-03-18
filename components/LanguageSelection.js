import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

export default function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a Language:</Text>
      <Picker
        selectedValue={selectedLanguage}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Spanish" value="Spanish" />
        <Picker.Item label="French" value="French" />
        <Picker.Item label="German" value="German" />
        {/* Add more languages as needed */}
      </Picker>
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
  picker: {
    height: 50,
    width: '100%',
  },
});