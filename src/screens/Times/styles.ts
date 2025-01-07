import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    }, 

    header: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 40,
    },

    texto: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    botoesTabela: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      width: '70%',
      marginTop: 15
  },
    flatlist: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 30,
        marginTop: 30
      },
      competicaoTabela: {
        fontWeight: '800',
        fontSize: 22,
        color: 'black',
      },
      jogosTabela: {
        fontWeight: '700',
        fontSize: 20,
        color: 'gray',
      },
      turmaTabela: {
        fontWeight: '700',
        fontSize: 16,
        color: 'gray',
      },
      alunoTabela: {
        fontWeight: '500',
        fontSize: 20,
        color: 'black',
      },
      diaTabela: {
        fontWeight: '800',
        fontSize: 22,
        color: colors.secondary,
      },
      observacaoTabela: {
        fontWeight: '400',
        fontSize: 18,
        color: 'gray',
      },
      localTabela: {
        fontWeight: '600',
        fontSize: 20,
        color: 'gray',
      },
      tableDado: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000', // Sombra
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    
      },
      botao: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.secondary
      },
})