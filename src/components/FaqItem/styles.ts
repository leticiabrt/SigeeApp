import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalstyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
      },
      questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
      },

      table: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.black,
      },
      tableHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
      },
      tableCell: {
        padding: 5,
        textAlign: 'center',
      },
})