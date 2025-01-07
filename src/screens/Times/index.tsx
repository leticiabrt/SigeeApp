import { styles } from "./styles";
import { ButtonSlide } from '../../components/ButtonSlide';
import { FaqItem } from '../../components/FaqItem';
import { View, Text, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth } from "../../hook/auth";
import { apiTime } from "../../services/data";
import { IAluno, IJogo, ITime } from "../../services/data/Time";
import { AxiosError } from "axios";
import { FlatList } from "react-native-gesture-handler";


export function Times() {
    //constantes para os modais
    const [modalJogosVisible, setModalJogosVisible] = useState(false);
    const [modalAlunosVisible, setModalAlunosVisible] = useState(false);

    //constante para saber se esta na pagina de jemg ou intercampi
    const [competicao, setCompeticao] = useState(true);

    //constante da tela de loading e das informacoes do user logado
    const { setLoading, user } = useAuth()

    // Pegar todos os times que o aluno participa
    const [times, setTimes] = useState<ITime[]>([])
    useEffect(() => {
        setLoading(true)
        async function loadTimes() {
            try {
                const response = await apiTime.index({ idAluno: user?.data.id })
                setTimes(response.data.times)
                console.log(times)
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                console.log(msg)
            }
        }
        setLoading(false)
        loadTimes()
    }, [])

    // Listar os times
    interface itemTime {
        item: ITime
    }

    const renderItem = (({ item }: itemTime) => {
        if (item.competicao == 'Intercampi' && competicao == false) {
            return (
                <View style={styles.tableDado}>
                    <Text style={styles.competicaoTabela}>{item.modalidade} {item.genero} - {item.competicao}</Text>
                    <Text style={styles.jogosTabela}>Jogos marcados: 2</Text>

                    <View style={styles.botoesTabela}>
                        <TouchableOpacity onPress={() => {
                            loadAlunos(item.idTime)
                            setModalAlunosVisible(true)
                        }}>
                            <Text style={styles.botao}>Ver integrantes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            loadJogos(item.idTime)
                            setModalJogosVisible(true)
                        }}>
                            <Text style={styles.botao}>Ver Jogos</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            )
        } else if (item.competicao == 'JEMG' && competicao == true) {
            return (
                <View style={styles.tableDado}>
                    <Text style={styles.competicaoTabela}>{item.modalidade} {item.genero} - {item.competicao}</Text>
                    <View style={styles.botoesTabela}>
                        <TouchableOpacity onPress={() => {
                            loadAlunos(item.idTime)
                            setModalAlunosVisible(true)
                        }}>
                            <Text style={styles.botao}>Ver integrantes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            loadJogos(item.idTime)
                            setModalJogosVisible(true)
                        }}>
                            <Text style={styles.botao}>Ver Jogos</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        } else {
            return (
                <View></View>

            )
        }
    })

    //Pegar os jogos de um time
    const [jogos, setJogos] = useState<IJogo[]>([])
    async function loadJogos(idTime: any) {
        try {
            setJogos([])
            const response = await apiTime.indexJogos({ idTime: idTime })
            setJogos(response.data.jogos)
            console.log(jogos)
        } catch (error) {
            const err = error as AxiosError
            const msg = err.response?.data as string
            console.log(msg)
        }
    }

    //Listar os jogos
    interface itemJogo {
        item: IJogo
    }

    const renderItemJogos = (({ item }: itemJogo) => {
        return (
            <View style={styles.tableDado}>
                <Text style={styles.diaTabela}>{item.dia} ({item.horarioInicio} - {item.horarioFim})</Text>
                <Text style={styles.localTabela}>Local: {item.local}</Text>
                {item.observacao &&
                    <Text style={styles.observacaoTabela}>Observação: {item.observacao}</Text>
                }
            </View>
        )
    }
    )

    const [alunos, setAlunos] = useState<IAluno[]>([])
    async function loadAlunos(idTime: any) {
        try {
            setAlunos([])
            const response = await apiTime.indexAlunos({ idTime: idTime })
            setAlunos(response.data.alunos)
            console.log(alunos)
        } catch (error) {
            const err = error as AxiosError
            const msg = err.response?.data as string
            console.log(msg)
        }
    }

    //Listar os jogos
    interface itemAluno {
        item: IAluno
    }

    // Pegar os alunos de determinado time
    const renderItemAlunos = (({ item }: itemAluno) => {
        return (
            <View style={styles.tableDado}>
                <Text style={styles.alunoTabela}>{item.name}</Text>
                <Text style={styles.turmaTabela}>{item.turma} {item.curso}</Text>
            </View>
        )
    }
    )
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>TIMES</Text>
            </View>
            <View style={styles.botoes}>
                <ButtonSlide title="JEMG" onPressI={() => setCompeticao(true)} cor={!competicao} />
                <ButtonSlide title="Intercampi" onPressI={() => setCompeticao(false)} cor={competicao} />
            </View>
            {
                times.length > 0 && (
                    <FlatList
                        style={styles.flatlist}
                        data={times}
                        renderItem={renderItem}
                        keyExtractor={item => String(item.idTime)}
                    />
                )
            }
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalJogosVisible}
                onRequestClose={() => setModalJogosVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Jogos</Text>
                        <ScrollView>
                            {
                                jogos.length > 0 && (
                                    <FlatList
                                        data={jogos}
                                        renderItem={renderItemJogos}
                                        keyExtractor={item => String(item.idJogo)}
                                    />
                                )
                            }
                        </ScrollView>
                        <Button title="Fechar" onPress={() => setModalJogosVisible(false)} />
                    </View>

                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAlunosVisible}
                onRequestClose={() => setModalAlunosVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Integrantes</Text>
                        <ScrollView>
                            {
                                alunos.length > 0 && (
                                    <FlatList
                                        data={alunos}
                                        renderItem={renderItemAlunos}
                                        keyExtractor={item => String(item.idAluno)}
                                    />
                                )
                            }
                        </ScrollView>
                        <Button title="Fechar" onPress={() => setModalAlunosVisible(false)} />
                    </View>

                </View>
            </Modal>

        </View>
    );
};


