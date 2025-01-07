import { ImageBackground, View, Text, Image, Alert, TouchableOpacity } from "react-native"; // Importação do Alert
import { styles } from "./styles";
import { styleContainer } from "../../styles/globalstyles";
import CustomButton from '../../components/CustomButton';
import React, { useEffect, useState } from 'react'; // Importando useState
import { IReserva } from "../../services/data/Reserva";
import { ICheckin, ITreino } from "../../services/data/Treino";
import { useAuth } from "../../hook/auth";
import { apiTreino } from "../../services/data";
import { FlatList } from "react-native-gesture-handler";
import { AxiosError } from "axios";
import { MaterialIcons } from "@expo/vector-icons";


export function Checkins() {
  const [checkinsRealizados, setCheckinsRealizados] = useState<string[]>([]); // Estado para armazenar check-ins realizados
  const [recarregar, setRecarregar] = useState(0)
  const [loadingPage, setLoadingPage] = useState(true);

  const handlePress = (atividade: string) => { // Adicionando tipo para o parâmetro
    Alert.alert(
      "Confirmação de Check-in",
      "Certeza que deseja fazer check-in nessa atividade?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => {
            setCheckinsRealizados((prev) => [...prev, atividade]); // Adiciona a atividade aos check-ins realizados
          }
        }
      ]
    );
  };

  async function handleCadReserva(idTreino: string) {
    const treinoExistente = checkins.find(element => String(element.idTreino) == idTreino);
    if (treinoExistente) {
      setLoading(true)
      try {
        await apiTreino.cancelarCheckin({ idAluno: (user?.data.id as unknown as string), idTreino: idTreino })
        Alert.alert("Checkin cancelado com sucesso!")
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
        console.log(msg)
      }
      setLoading(false)
    } else {
      setLoading(true)
      try {
        await apiTreino.realizarChekin({ idAluno: (user?.data.id as unknown as string), idTreino: idTreino })
        Alert.alert("Checkin realizado com sucesso!")
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
        console.log(msg)
      }
      setLoading(false)
    }
  }

  interface itemTreino {
    item: ITreino
  }

  function avaliaTreino(idTreino: string, item: any) {
    const treinoExistente = checkins.find(element => String(element.idTreino) == idTreino);
    if ((item.numeroMaximoParticipantes == item.vagasOcupadas) && !treinoExistente) {
      return false
    }
    if (treinoExistente) {
      return "Cancelar";
    }
    return "Realizar";
  }
  // foreach para percorrer todos os treinos
  const renderItem = (({ item }: itemTreino) => {
    const aux = avaliaTreino(item.idTreino as unknown as string, item) as keyof typeof styles;
    return (
      <View style={styles.tableDado}>
        <Text style={styles.horarioTabela}>Dia: {item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
        <Text style={styles.localTabela}>Local: {item.local}</Text>
        <Text style={styles.atividadeTabela}>Atividade: {item.nomeModalidade}</Text>
        <View style={styles.viewLinhaTabela}>
          {
            aux ? (
              <TouchableOpacity onPress={() => { handleCadReserva(item.idTreino as unknown as string) }}>
                <Text style={styles[aux]}>{aux} checkin</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text style={styles.treinoCheio}> Treino lotado</Text>
              </TouchableOpacity>
            )
          }


          <View style={styles.numeroParticipantes}>
            <MaterialIcons name={"people"} size={25} />
            <Text>{item.vagasOcupadas}/{item.numeroMaximoParticipantes}</Text>
          </View>
        </View>

      </View>
    )
  })

  /*Lógica de listar os treinos*/
  const [treino, setTreino] = useState<ITreino[]>([])
  const [checkins, setCheckins] = useState<ICheckin[]>([])
  const { setLoading, user } = useAuth()

  useEffect(() => {
    setLoadingPage(true)
    async function loadMessage() {

      try {
        const response = await apiTreino.index({ idAluno: user?.data.id })
        console.log(response.data.checkins)
        setTreino(response.data.dados)
        setCheckins(response.data.checkins)
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
        console.log(msg)
      }finally {
        setLoadingPage(false); 
      }
    }
    loadMessage()
  }, [recarregar])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>CHECKINS</Text>
      </View>
      {loadingPage && (
        <View style={styles.loadingContainer}>
          <Image source={require('../../assets/gifs/load.gif')} style={styles.loadingGif}/>
        </View>
      )}
      {! loadingPage && treino.length > 0 && (
          <FlatList
            style={styles.flatlist}
            data={treino}
            renderItem={renderItem}
            keyExtractor={item => String(item.idTreino)}
          />
        )
      }

      <TouchableOpacity onPress={() => setRecarregar(recarregar + 1)}>
        <Text style={styles.textoRecarregar}>Recarregar página</Text>
      </TouchableOpacity>

    </View>
  );
}
