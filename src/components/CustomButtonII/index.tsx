import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from "./styles"
import { LinearGradient } from 'expo-linear-gradient';

interface IButton {
  title: string,
  onPress: () => void
}

const CustomButton = ({ title, onPress }: IButton) => {
  return (
    <LinearGradient
      style={{
        height: 50,
        width: 200,
        borderRadius: 25,
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#00198E', '#FFDF2B']}>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
};

export default CustomButton;