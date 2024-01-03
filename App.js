import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
//import {  View, TextAdd, ButtonAdd } from './app/src/styles/custom';

export default function App() {
  const [number, setNumber] = useState(0)

  function increment(){
    return setNumber(number + 1);
  }

  
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Ola mundo!</Text>
      <StatusBar style="dark"/>

      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.text}>Add +</Text>
      </TouchableOpacity>
      
    <Text style={styles.text}>{number}</Text>

    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c241b",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
  },
});