import React from 'react';
import { ImageBackground, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


export const Testes = () => {
  return (

    <LinearGradient 
    style={{
    height: 50, 
    width: 200, 
    marginTop: 15, 
    borderRadius: 5}}

    start={{x:0,y:1}}
	  end={{x:1,y:0}}
    colors={['#00198E','#FFDF2B']}>

    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      
      <Text style={styles.text}>Meu Botão</Text>
    </TouchableOpacity>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    alignItems: 'center',
   },
  text: {
    padding: 10,
    fontSize: 18,
    color: '#fff',
  },
});

