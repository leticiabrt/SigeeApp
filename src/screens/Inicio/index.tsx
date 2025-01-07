import React, { useState } from 'react';
import { View, Text, Image, TextInput, Alert, TouchableOpacity, Linking } from 'react-native';
import { styles } from './styles';
import CustomButtonII from '../../components/CustomButtonII';
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useAuth } from "../../hook/auth";
import { apiUser } from "../../services/data";
import { AxiosError } from "axios";

export interface ILogin {
    email?: string
    password?: string
}

export function Inicio() {
    const [data, setData] = useState<ILogin>();
    const { signIn, setLoading } = useAuth()

    async function handleLogin() {
        if (data?.email && data?.password) {
            setLoading(true)
            console.log(data)
            try {
                const resposta = await signIn(data)
            } catch (error) {
                console.log(error)
                const err = error as AxiosError
                const msg = err.response?.data as string
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!!!")
        }
    }

    function handleChange(item: ILogin) {
        setData({ ...data, ...item });
    }

    const cefet = require('../../assets/cefet.png');
    const titulo = require('../../assets/cabecalho.png');
    const whats = require('../../assets/whats.png');
    const insta = require('../../assets/insta.png');
    const email = require('../../assets/email.png');
    return (
        <View style={styles.container}>
            <View style={styles.tela}>
                <View style={styles.cefet}>
                    <Image source={cefet}></Image>
                </View>
                <View style={styles.viewimg}>
                    <Image source={titulo} style={styles.titulo}></Image>
                </View>

                <Text style={styles.texto}>
                    Bem vindo ao sistema de educação física do Campus Varginha.
                </Text>
                <View style={styles.login}>
                    <TextInput
                        onChangeText={(i) => handleChange({ email: i })}
                        placeholder="Email"
                        style={styles.input}
                        autoCapitalize='none'
                    />
                    <TextInput
                        onChangeText={(i) => handleChange({ password: i })}
                        placeholder="Senha"
                        style={styles.input}
                        secureTextEntry={true} // Aqui o campo será cifrado
                        autoCapitalize='none'
                    />

                    <View style={styles.but}>
                        <CustomButtonII title="Entrar" onPress={handleLogin} />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  Linking.openURL('https://render-rqga.onrender.com/CadastroInicial')}>
                            <Text style={styles.registrar}>Registrar-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
