import React from 'react';
import { View, Text, Button, StyleSheet, } from 'react-native';

export default function Screen1({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>
        Start customizing this template
      </Text>
      <Button title="Go to Screen2" onPress={() => navigation.navigate("Screen2")} />
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
