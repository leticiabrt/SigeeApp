import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Modal, Button, ScrollView, TouchableOpacity, Alert, Linking } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII';
import { useAuth } from "../../hook/auth";
import { FlatList } from 'react-native-gesture-handler';
import { ITreino } from '../../services/data/Treino';
import { apiMensagem, apiReserva, apiTime, apiTreino } from '../../services/data';
import { AxiosError } from 'axios';
import { MaterialIcons } from '@expo/vector-icons';
import { IReserva } from '../../services/data/Reserva';
import { set } from 'date-fns';
import { IJogo, ITime } from '../../services/data/Time';
import { IMensagem } from '../../services/data/Mensagem';

// Define o tipo para as notificações
type Notificacao = {
  id: number;
  mensagem: string;
};

// Define o tipo para reservas
type Reserva = {
  id: number;
  data: string;
  hora: string;
  status: string;
  justificativa?: string; // Adiciona a justificativa como opcional
};

export const Perfil = () => {
  const [modalReservasVisible, setModalReservasVisible] = useState(false);
  const [modalTimesVisible, setModalTimesVisible] = useState(false);
  const [modalCheckinsVisible, setModalCheckinsVisible] = useState(false);
  const [modalNotificacoesVisible, setModalNotificacoesVisible] = useState(false);
  const [modalJustificativaVisible, setModalJustificativaVisible] = useState(false);
  const [justificativaSelecionada, setJustificativaSelecionada] = useState('');
  const [modalEtidarVisible, setModalEtidarVisible] = useState(false);
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

  const [recarregar, setRecarregar] = useState(false)

  const sms = require('../../assets/sms.png');

  /*Lógica de sair e de mostrar os dados*/
  const { user, signOut, loading, setLoading } = useAuth()

  /*Lógica de listar os treinos*/
  const [treino, setTreino] = useState<ITreino[]>([])
  useEffect(() => {
    setLoading(true)
    async function loadTreinos() {
      try {
        const response = await apiTreino.mostrarCheckins({ idAluno: user?.data.id })
        setTreino(response.data.dados)
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
      }
    }
    setLoadingPage(false)
    setLoading(false)
    loadTreinos()
  }, [])

  /*Lógica para cancelar um checkin*/
  async function handleCadReserva(idTreino: string) {
    setLoading(true)
    try {
      await apiTreino.cancelarCheckin({ idAluno: (user?.data.id as unknown as string), idTreino: idTreino })
      Alert.alert("Checkin realizado com sucesso!")
    } catch (error) {
      const err = error as AxiosError
      const msg = err.response?.data as string
    }
    setLoading(false)
  }

  interface itemTreino {
    item: ITreino
  }

  // foreach para percorrer todos treinos que o aluno tem checkin
  const renderItemCheckin = (({ item }: itemTreino) => {
    if (item) {
      return (
        <View style={styles.tableDado}>
          <Text style={styles.horarioTabela}>Dia: {item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
          <Text style={styles.localTabela}>Local: {item.local}</Text>
          <Text style={styles.atividadeTabela}>Atividade: {item.nomeModalidade}</Text>
          <View style={styles.viewLinhaTabela}>
            <TouchableOpacity onPress={() => { handleCadReserva(item.idTreino as unknown as string) }}>
              <Text style={styles.Cancelar}>Cancelar checkin</Text>
            </TouchableOpacity>

            <View style={styles.numeroParticipantes}>
              <MaterialIcons name={"people"} size={25} />
              <Text>{item.vagasOcupadas}/{item.numeroMaximoParticipantes}</Text>
            </View>
          </View>

        </View>
      )
    } else {
      return (
        <View></View>
      )
    }

  })

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*Lógica de listar as reservas*/
  const [reserva, setReserva] = useState<IReserva[]>([])
  useEffect(() => {
    setLoading(true)
    async function loadReservas() {
      const response = await apiReserva.index()
      setReserva(response.data.dados)
    }
    setLoadingPage(false)
    setLoading(false)
    loadReservas()
  }, [])

  interface itemReserva {
    item: IReserva
  }

  // foreach para percorrer todas reservas
  const renderItemReserva = (({ item }: itemReserva) => {
    if (item.status == 'A' && item.idAluno == user?.data.id) {
      return (
        <View style={styles.tableDado}>
          <Text style={styles.horarioTabela}>Dia: {item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
          <Text style={styles.atividadeTabela}>{item.finalidade}</Text>
          <Text style={styles.responsavelTabela}>Responsável: {item.nomeAluno}</Text>
        </View>
      )
    } else {
      return (
        <View></View>
      )
    }
  })


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Listar todos os times que o aluno participa
  const [times, setTimes] = useState<ITime[]>([])
  useEffect(() => {
    setLoading(true)
    async function loadTimes() {
      try {
        const response = await apiTime.index({ idAluno: user?.data.id })
        setTimes(response.data.times)
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
      }
    }
    setLoadingPage(false)
    setLoading(false)
    loadTimes()
  }, [])

  interface itemTime {
    item: ITime
  }

  const renderItemTimes = (({ item }: itemTime) => {
    if (item) {
      return (
        <View style={styles.tableDado}>
          <Text style={styles.competicaoTabela}>{item.modalidade} {item.genero} - {item.competicao}</Text>
        </View>
      )
    } else {
      return (
        <View></View>
      )
    }
  })


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Listar todos as mensagens
  const [mensagens, setMensagens] = useState<IMensagem[]>([])
  useEffect(() => {
    setLoading(true)
    async function loadMensagens() {
      try {
        const response = await apiMensagem.index({ idAluno: user?.data.id })
        setMensagens(response.data.mensagens)
        console.log(response.data)
      } catch (error) {
        const err = error as AxiosError
        const msg = err.response?.data as string
        console.log(msg)
      }
    }
    setLoading(false)
    loadMensagens()
    setRecarregar(false)
  }, [recarregar])

  interface itemMensagem {
    item: IMensagem
  }

  const renderItemMensagens = (({ item }: itemMensagem) => {
    if (item) {
      return (
        <View style={styles.tableDado}>
          <Text style={styles.conteudo}>{item.conteudo}</Text>
          <Text>{item.dia} - {item.horario}</Text>
        </View>
      )
    } else {
      return (
        <View></View>
      )
    }
  })

  const [loadingPage, setLoadingPage] = useState(true);

  return (
    <ScrollView style={styles.container}>
      {loadingPage && (
        <View style={styles.loadingContainer}>
          <Image source={require('../../assets/gifs/load.gif')} style={styles.loadingGif} />
        </View>
      )}
      <View style={styles.header}>
        <View style={styles.teste}>
          <View style={styles.tex}>
            <Text style={styles.texto}>PERFIL</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setModalNotificacoesVisible(true)}>
          <Image style={styles.img} source={sms}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <View style={styles.l}>
          <View style={styles.infos}>
            <Text style={styles.title}>NOME: <Text style={styles.subtitle}>{user?.data.name}</Text></Text>
            {user?.data.tipo != 'professor' &&
              <>
                <Text style={styles.title}>CURSO: <Text style={styles.subtitle}>{user?.data.turma} {user?.data.curso}</Text></Text>
                <Text style={styles.title}>MATRÍCULA: <Text style={styles.subtitle}>{user?.data.matricula}</Text></Text>
              </>
            }
            <Text style={styles.title}>EMAIL: <Text style={styles.subtitle}>{user?.data.email}</Text></Text>
            <Text style={styles.title}>DATA DE NASCIMENTO: <Text style={styles.subtitle}>{user?.data.dtNascimento}</Text></Text>
          </View>
        </View>
        {user?.data.tipo == 'Aluno' &&
          <View style={styles.desc}>
            <View style={styles.caixa}>
              <Text style={styles.title}>Descrição esportiva: </Text>
              <Text style={styles.title}><Text style={styles.subtitle}>{user?.data.descricaoEsportiva}</Text></Text>
            </View>
          </View>
        }

        <View style={styles.botao}>
          <View style={styles.but}>
            <CustomButtonII title="Minhas reservas" onPress={() => setModalReservasVisible(true)} />
          </View>
          {user?.data.tipo == 'Aluno' &&
            <>
              <View style={styles.but}>
                <CustomButtonII title="Meus times" onPress={() => setModalTimesVisible(true)} />
              </View>
              <View style={styles.but}>
                <CustomButtonII title="Meus checkins" onPress={() => setModalCheckinsVisible(true)} />
              </View>
            </>

          }
          <View style={styles.botaoSair}>
            <TouchableOpacity onPress={signOut}><Text style={styles.botaoSairTexto}>Sair</Text></TouchableOpacity>
          </View>
          <View style={styles.botaoSair}>
            <TouchableOpacity onPress={() => Linking.openURL('https://sigeevarginha.com.br/entrar')} ><Text style={styles.editarPerfil}>Clique aqui para editar seu perfil</Text></TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal para mostrar as reservas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalReservasVisible}
        onRequestClose={() => setModalReservasVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Minhas reservas</Text>
            <ScrollView>
              {
                reserva.length > 0 && (
                  <FlatList
                    data={reserva}
                    renderItem={renderItemReserva}
                    keyExtractor={item => String(item.idReserva)}
                  />
                )
              }
            </ScrollView>
            <Button title="Fechar" onPress={() => setModalReservasVisible(false)} />
          </View>

        </View>
      </Modal>

      {/* Modal para mostrar os times */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalTimesVisible}
        onRequestClose={() => setModalTimesVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Meus times</Text>
            <ScrollView>
              {
                times.length > 0 && (
                  <FlatList
                    data={times}
                    renderItem={renderItemTimes}
                    keyExtractor={item => String(item.idTime)}
                  />
                )
              }
            </ScrollView>
            <Button title="Fechar" onPress={() => setModalTimesVisible(false)} />
          </View>
        </View>
      </Modal>

      {/* Modal para mostrar os check-ins */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCheckinsVisible}
        onRequestClose={() => setModalCheckinsVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Meus checkins</Text>
            <ScrollView>
              {
                treino.length > 0 && (
                  <FlatList
                    data={treino}
                    renderItem={renderItemCheckin}
                    keyExtractor={item => String(item.idTreino)}
                  />
                )
              }
            </ScrollView>
            <Button title="Fechar" onPress={() => setModalCheckinsVisible(false)} />
          </View>
        </View>
      </Modal >

      {/* Modal para mostrar as notificações */}
      < Modal
        animationType="slide"
        transparent={true}
        visible={modalNotificacoesVisible}
        onRequestClose={() => setModalNotificacoesVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Notificações</Text>
            <ScrollView>
              {
                mensagens.length > 0 && (
                  <FlatList
                    data={mensagens}
                    renderItem={renderItemMensagens}
                    keyExtractor={item => String(item.idMensagem)}
                  />
                )
              }
            </ScrollView>
            <TouchableOpacity onPress={() => setRecarregar(true)}>
              <Text style={styles.textoRecarregar}>Recarregar página</Text>
            </TouchableOpacity>
            <Button title="Fechar" onPress={() => setModalNotificacoesVisible(false)} />
          </View>
        </View>
      </Modal >

    </ScrollView >
  );
};
