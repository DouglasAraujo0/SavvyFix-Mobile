import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/FirebaseConfig';
import { useNavigation } from "@react-navigation/native";   
import HeaderLoginCadastro from "../components/HeaderLoginCadastro";

export default function Cadastro() {
    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('Login');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');

    function cadastrar() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <HeaderLoginCadastro />
                <View style={styles.formContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>CADASTRO</Text>
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Nome Completo</Text>
                        <TextInput
                            style={styles.input}
                            value={nomeCompleto}
                            onChangeText={setNomeCompleto}
                        />
                        <Text style={styles.inputLabel}>CPF</Text>
                        <TextInput
                            style={styles.input}
                            value={cpf}
                            onChangeText={setCpf}
                            keyboardType="numeric"
                        />
                        <Text style={styles.inputLabel}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                        />
                        <Text style={styles.inputLabel}>CEP</Text>
                        <TextInput
                            style={styles.input}
                            value={cep}
                            onChangeText={setCep}
                            keyboardType="numeric"
                        />
                        <Text style={styles.inputLabel}>Rua</Text>
                        <TextInput
                            style={styles.input}
                            value={rua}
                            onChangeText={setRua}
                        />
                        <Text style={styles.inputLabel}>Número</Text>
                        <TextInput
                            style={styles.input}
                            value={numero}
                            onChangeText={setNumero}
                            keyboardType="numeric"
                        />
                        <Text style={styles.inputLabel}>Bairro</Text>
                        <TextInput
                            style={styles.input}
                            value={bairro}
                            onChangeText={setBairro}
                        />
                        <Text style={styles.inputLabel}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            value={cidade}
                            onChangeText={setCidade}
                        />
                        <Text style={styles.inputLabel}>Estado</Text>
                        <TextInput
                            style={styles.input}
                            value={estado}
                            onChangeText={setEstado}
                        />
                        <Text style={styles.inputLabel}>País</Text>
                        <TextInput
                            style={styles.input}
                            value={pais}
                            onChangeText={setPais}
                        />

                        <TouchableOpacity onPress={cadastrar} style={styles.signupButton}>
                            <Text style={styles.signupButtonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={login} style={styles.finalButton}>
                    <Text style={styles.signupText}>Entre aqui</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
    },
    container: {
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    textContainer: {
        marginBottom: 20,
        backgroundColor: '#D7CCB5',
        borderRadius: 10,
        padding: 7,
        width: '60%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
    },
    inputContainer: {
        marginTop: 15,
        marginBottom: 20,
        backgroundColor: '#D9D9D9',
        padding: 20,
        width: '100%',
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    signupButton: {
        alignSelf: 'flex-end',
        backgroundColor: "#98DA9E",
        paddingVertical: 3,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15,
    },
    signupButtonText: {
        color: '#000',
        fontSize: 16,
    },
    finalButton: {
        marginTop: -20,
        marginBottom: 60,
        alignSelf: 'flex-end',
        marginRight: 50,
    },
    signupText: {
        color: '#000',
        fontSize: 16,
    },
});
