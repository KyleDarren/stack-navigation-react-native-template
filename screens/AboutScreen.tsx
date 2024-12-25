import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const AboutScreen = () => {
  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the App</Text>
      <Text style={styles.description}>
        This is a simple React Native screen with a button.
      </Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AboutScreen;
