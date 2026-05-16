import { Image } from 'expo-image'; // Keeping your fast expo-image import
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import MEEE from '../../assets/images/MEEE.jpg';

export default function App() {
  // State variables
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // Message based on counter
  const message =
    count > 0
      ? `${name}, you tapped ${count} times!`
      : "Tap the + button to start";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Image */}
      <Image source={MEEE} style={styles.image} />

      {/* Input */}
      <TextInput 
        placeholder="Enter your name" 
        onChangeText={setName} 
        value={name} 
        style={styles.input} 
      />

      {/* Greeting */}
      <Text style={styles.text}>
        {name === '' ? 'Please enter your name' : `Hello, ${name}!`}
      </Text>

      {/* Counter Message */}
      <Text style={styles.text}>{message}</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => setCount(count + 1)} />
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  },
  text: { 
    fontSize: 16, 
    marginVertical: 5 
  },
  buttonContainer: { 
    marginTop: 10, 
    width: '60%' 
  }
});