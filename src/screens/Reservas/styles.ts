import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyles"


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  ajuste: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 30
  },
  header: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
        
  },
  texto: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    fontSize: 16,
    color: '#333',
  },
  cell1: {
    fontSize: 16,
    color: '#333',
    backgroundColor: colors.gray,
    padding: 5,
  },
  cellReservado: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bot:{
    marginBottom: 10,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 30
  },
  textt: {
    margin: 10,
    fontSize: 14,
  },
  mensagem: {
    backgroundColor: "rgb(159, 217, 227)",
    marginTop: 20,
    marginBottom: 20,
    height: 160,
    borderRadius: 10,
    width: 300,
    padding: 10
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
  flatlist: {
    width: '100%',
  },
  idAluno: {
    display: 'none',
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
  viewSemana: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  textSemana: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 30,
    fontWeight: '800',
    color: colors.secondary
  },
  textoRecarregar: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    color: colors.secondary,
    fontWeight: '800'
  },
  botaoRegras: {
    marginTop: 10,
    display: 'flex',
    width: '100%',
    flexDirection: 'row'
  },
  iconeRegras: {
    marginTop: 5,
    marginRight: 5
  },
  textoRegras: {
    marginTop: 26
  },
  textoRegrasBotao: {
    marginTop: 5,
    color: colors.secondary,
    fontWeight: '800'
  },
  
});