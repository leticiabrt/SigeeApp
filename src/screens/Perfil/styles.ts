import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: colors.secondary,
        width: '100%',
        height: 40,
        padding: 5,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-end',
    },

    texto: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20, 
    },

    info: {
        padding: 10,
        borderColor: colors.black,        
    },

    infos: {
        marginLeft: 5,
        justifyContent: 'space-around', 
    },

    desc: {
        borderColor: colors.black,
       // borderBottomWidth: 1,

    },

    caixa:{
        backgroundColor: colors.gray,
        width: '95%',
        margin: 10,
        marginBottom: 30,
        marginTop: 30,
        padding: 10,
        borderRadius: 20,
    },

    title: {
        color: colors.black,
        fontWeight: '700',
        fontSize: 17,
        padding: 5,
    },
    subtitle: {
        fontWeight: '400',
        fontSize: 17,
        padding: 5,
    },

    text: {
        marginTop: 10,
        textAlign: 'justify',
    },

    botao:{
        alignItems: 'center',
    },
    but: {
        margin: 10,
        width: 200,
    },

    img: {
        height: 30,
        width: 45
    },
    tex: {
        paddingRight: 115
    },
    teste: {
        justifyContent: 'center'
    },
    l: {
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 12
    },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.black,
        backgroundColor: colors.black,
      },
      botaoSair: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
      },
      botaoSairTexto: {
        color: "red",
        fontWeight: '900',
        fontSize: 15
      },
      horarioTabela: {
        fontWeight: '700',
        fontSize: 18,
        color: colors.secondary,
      },
      atividadeTabela: {
        fontWeight: '400',
        fontSize: 18,
        color: 'gray',
      },
      responsavelTabela: {
        fontWeight: '400',
        fontSize: 16,
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
        width: '100%'
    
      },
      localTabela: {
        fontWeight: '400',
        fontSize: 18,
        color: 'gray',
      },
      competicaoTabela: {
        fontWeight: '800',
        fontSize: 18,
        color: 'black',
      },
      jogosTabela: {
        fontWeight: '700',
        fontSize: 16,
        color: 'gray',
      },
      conteudo: {
        fontWeight: '600',
      },
      Cancelar: {
        fontWeight: "800",
        color: "red",
        width: 250,
        paddingTop: 20
      },
      viewLinhaTabela: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
      },
      numeroParticipantes: {
        display: 'flex',
      },
      localReserva: {
        fontWeight: '400',
        fontSize: 16,
        color: 'gray',
      },
      finalidadeReserva: {
        fontWeight: '400',
        fontSize: 20,
        color: 'gray',
      },
      editarPerfil: {
        fontWeight: '700',
        fontSize: 14
      },
      loadingContainer: {
        position: "absolute",  
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",  
        alignItems: "center",      
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        zIndex: 9999, 
      },
      
      loadingGif: {
        width: 100,  
        height: 100, 
        resizeMode: "contain", 
      },
      textoRecarregar: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        color: colors.secondary,
        fontWeight: '800'
      },
})