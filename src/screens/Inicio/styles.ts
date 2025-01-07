import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    tela: {
        flex: 1
    },
    cefet: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 150,
    },

    image2: {
        width: 380,
        height: 47,
    },
    image3: {
        width: 50,
        height: 50,
    },
    image4: {
        width: 60,
        height: 50,
    },
    images: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    text: {
        textAlign: 'center',
        margin: 5,
        fontSize: 15
    },


    but: {
        margin: 10,
    },

    footer: {
        position: 'absolute', // Mantém o rodapé fixo na parte inferior
        bottom: 0, 
        width: '100%',        // Garante que o rodapé ocupe toda a largura
        padding: 10,          // Espaçamento interno do rodapé
    },
    input: {
        height: 50,
        width: "60%",
        borderRadius: 20,
        margin: 20,
        marginBottom: 5,
        marginTop: 10,
        backgroundColor: colors.gray,
        elevation: 10,
        padding: 5
    },
    login: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        padding: 20,
    },
    header: {
        position: 'relative',
        backgroundColor: colors.secondary,
        borderColor: colors.primary,
        borderTopWidth: 10,
        borderBottomWidth: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    titulo: {
        width: 370,
        height: 45,
    },

    viewimg: {
        width: '100%',
        height: '10%',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registrar: {
        fontWeight: '800',
        color: colors.secondary
    }

})