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

  table: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.black,
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  text: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  botao: {
    flex: 1,
    padding: 10,
  },
  dadoTable: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  flatlist: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 30,
    marginTop: 30
  },
  horarioTabela: {
    fontWeight: '800',
    fontSize: 22,
    color: 'black',
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

  },
  localTabela: {
    fontWeight: '400',
    fontSize: 20,
    color: 'gray',
  },
  Cancelar: {
    fontWeight: "800",
    color: "red",
    width: 290,
    paddingTop: 20
  },
  Realizar: {
    fontWeight: "800",
    color: "green",
    width: 290,
    paddingTop: 20
  },
  treinoCheio: {
    fontWeight: "800",
    color: "gray",
    width: 290,
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
  textoRecarregar: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    color: colors.secondary,
    fontWeight: '800'
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
})