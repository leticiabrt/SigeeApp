import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globalstyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f7', // Fundo suave
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
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000', // Sombra
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // Para sombra no Android
    },
    dateText: {
        fontSize: 16,
        color: '#6b7280', // Cor suave para data
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
        color: '#374151',
    },
    location: {
        fontSize: 14,
        color: '#9ca3af', // Cinza mais claro para localização
        marginBottom: 5,
    },
    responsible: {
        fontSize: 14,
        color: '#4b5563', // Cor diferenciada para o responsável
    },
    data: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    flatlist: {
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 30,
        marginTop: 10
      },
      horarioTabela: {
        fontWeight: '500',
        fontSize: 20,
        color: 'black',
      },
      atividadeTabela: {
        fontWeight: '800',
        fontSize: 22,
        color: colors.secondary,
      },
      modalidadeTabela: {
        fontWeight: '400',
        fontSize: 16,
        color: 'black',
      },
      publicoTabela: {
        fontWeight: '400',
        fontSize: 16,
        color: 'gray',
      },
      responsavelTabela: {
        fontWeight: '400',
        fontSize: 16,
        color: 'gray',
      },
      timeTabela: {
        fontWeight: '400',
        fontSize: 16,
        color: 'black',
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
      localTabela: {
        fontWeight: '400',
        fontSize: 20,
        color: 'black',
      },
      semana: {
        color: colors.secondary,
        fontWeight: '800',
        fontSize: 30,
        width: '100%',
        textAlign: 'center',
        paddingTop: 10
      }
});
