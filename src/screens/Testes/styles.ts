import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"
import LinearGradient from 'react-native-linear-gradient';

export const styles = StyleSheet.create({
    container: {
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

    info: {
        flexDirection: 'row',
        padding: 10,
        borderColor: colors.black,
       // borderBottomWidth: 1,
        
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
        padding: 10,
    },

    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 17,
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

    tela: {
        justifyContent: 'space-around',
        flex: 1,
    }

})