import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles"

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Meu Aplicativo. Todos os direitos reservados.</Text>
    </View>
  );
};


