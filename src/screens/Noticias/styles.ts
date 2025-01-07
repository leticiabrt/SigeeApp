import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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

    caixa: {
        backgroundColor: colors.gray,
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        margin: 10,
    },
    
    noticias: {
        flex: 1,
        flexDirection: 'column',
        paddingStart: 20,
        paddingRight: 20,
    },

    tituloNoticia: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    textoNoticia: {
        fontSize: 14,
        textAlign: 'justify',
    },
    horarioNoticia: {
        color: 'gray',
        width: '100%',
        
    }
    
})