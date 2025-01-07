import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles";
import { MenuDrawer } from '../../navigation/MenuDrawer.navigation'

export const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.retangulo}>
          <Text style={styles.headerText}>EDUCAÇÃO FÍSICA</Text>
        </View>
        <View>
          <MenuDrawer/>
        </View>
      </View>
      <View style={styles.header2}>
        <Text style={styles.headerText}>TEXT</Text>
      </View>
    </View>
  );
};

