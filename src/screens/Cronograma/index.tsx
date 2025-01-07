import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { IJogos, ITreinos } from '../../services/data/Cronograma';
import { useAuth } from '../../hook/auth';
import { apiCronograma } from '../../services/data';

export function Cronograma() {
    const [jogos, setJogos] = useState<IJogos[]>([])
    const [treinos, setTreinos] = useState<ITreinos[]>([])
    const [inicioSemana, setInicioSemana] = useState('')
    const [fimSemana, setFimSemana] = useState('')
    const { setLoading, user } = useAuth()
    useEffect(() => {
        setLoading(true)
        async function loadCronograma() {
            const response = await apiCronograma.index()
            setTreinos(response.data.treinos)
            setJogos(response.data.jogos)
            setInicioSemana(response.data.inicioSemana)
            setFimSemana(response.data.fimSemana)
        }
        setLoading(false)
        loadCronograma()
    }, [])

    interface itemJogo {
        item: IJogos
    }

    interface itemTreino {
        item: ITreinos
    }

    interface itemAtividade {
        item: Atividade
    }

    type Atividade = IJogos | ITreinos;
    const [atividades, setAtividades] = useState<Atividade[]>([]);

    const ordenarPorDataEHorario = (atividades: Atividade[]) => {
        return atividades.sort((a, b) => {
            // Ordena primeiro por data
            const dataA = new Date((a as any).dia);
            const dataB = new Date((b as any).dia);

            if (dataA.getTime() !== dataB.getTime()) {
                return dataA.getTime() - dataB.getTime();
            }

            // Se as datas forem iguais, ordena por horário
            const horarioA = (a as any).horarioInicio;
            const horarioB = (b as any).horarioInicio;

            // Converte o horário para um número que facilita a comparação (exemplo "14:30" -> 14 * 60 + 30)
            const minutosA = parseInt(horarioA.split(':')[0]) * 60 + parseInt(horarioA.split(':')[1]);
            const minutosB = parseInt(horarioB.split(':')[0]) * 60 + parseInt(horarioB.split(':')[1]);

            return minutosA - minutosB;
        });
    };

    useEffect(() => {
        // Combina os jogos e treinos e ordena a lista
        const atividadesCombinadas = [...jogos, ...treinos];
        const atividadesOrdenadas = ordenarPorDataEHorario(atividadesCombinadas);
        setAtividades(atividadesOrdenadas);
    }, [jogos, treinos]); // Chama a ordenação sempre que jogos ou treinos mudarem

    const renderItemTreino = ({ item }: itemAtividade) => {
        let tipo = ''
        if ('idJogoTime' in item) {
            tipo = 'Jogo'
        } else if ('idTreino' in item) {
            tipo = 'Treino'
        }
        return (
            <View style={styles.tableDado}>
                <Text style={styles.atividadeTabela}>Atividade: {tipo}</Text>
                <Text style={styles.horarioTabela}>Dia: {item.diaSemana} ({item.horarioInicio} - {item.horarioFim})</Text>
                <Text style={styles.localTabela}>Local: {item.local}</Text>

                {('idJogoTime' in item) &&
                    <Text style={styles.timeTabela}>Time: {item.time}</Text>
                }
                {('idTreino' in item) &&
                    <>
                        <Text style={styles.modalidadeTabela}>Modalidade: {item.modalidade} {item.genero}</Text>
                        <Text style={styles.publicoTabela}>Público: {item.publico}</Text>
                    </>
                }
            </View>
        ) // Aqui você pode retornar o componente que deseja renderizar para Treinos
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.texto}>CRONOGRAMA</Text>
            </View>
            <Text style={styles.semana}>{inicioSemana} - {fimSemana}</Text>
            {atividades.length > 0 && (
                <FlatList
                    data={atividades}
                    renderItem={renderItemTreino}
                    style={styles.flatlist}
                    keyExtractor={item => {
                        // Verifica se o item é um jogo ou treino e retorna o campo de ID correspondente
                        if ('idJogoTime' in item) {
                            return String(item.idJogoTime);  // ID do Jogo
                        }
                        if ('idTreino' in item) {
                            return String(item.idTreino);  // ID do Treino
                        }
                        return '';  // Retorna uma string vazia por padrão se não encontrar um ID válido (não deve acontecer)
                    }}
                />
            )}
        </View>
    );
};
