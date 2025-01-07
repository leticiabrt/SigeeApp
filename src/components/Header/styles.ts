import { StyleSheet } from "react-native";
import {colors} from '../../styles/globalstyles'

export const styles = StyleSheet.create({
    header: {
      backgroundColor: colors.primary,
      width: 600,
      height: 70,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.white,
      
    },
    retangulo:{
      backgroundColor: colors.secondary,
      height: 40,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header2:{
      backgroundColor: colors.secondary,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });