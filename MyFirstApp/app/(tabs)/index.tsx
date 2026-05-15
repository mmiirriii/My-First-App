import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import MEEE from '../../assets/images/MEEE.jpg';

export default function App() {
  return (
    <View style={s.screen}>
      {/* 2. Use the imported variable name directly in the source prop */}
      <Image source={MEEE} style={s.photo} /> 
      
      <Text style={s.name}>June Rose Paragat</Text>
      <Text style={s.bio}>3rd Year MMA Student at Mapúa Malayan Colleges Mindanao</Text>
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