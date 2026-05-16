import { Image } from 'expo-image';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MEEE from '../../assets/images/MEEE.jpg';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={s.screen}>
      <Image source={MEEE}
      style={s.photo}
    /> 

    <TextInput 
        placeholder="Type your name"
        placeholderTextColor="#aaa"
        onChangeText={setName}
        value={name}
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: 200,
        }}
      />

    <Text style={s.name}>
      Hello, {name}!
    </Text>    

    <Text style={s.bio}>
      3rd Year MMA Student at Mapúa Malayan Colleges Mindanao
      </Text>
    </View>
  );
}
// I change the stylesheet to make the profile screen look better. 05/16/2026
const s = StyleSheet.create({
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff' 
  },
  photo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  bio: { 
    fontSize: 14, 
    color: '#888'
  },
});