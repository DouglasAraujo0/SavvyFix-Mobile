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

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [pais, setPais] = useState('');
    const [cadastroSuccess, setCadastroSuccess] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [cepError, setCepError] = useState('');
    const [estadoError, setEstadoError] = useState('');
    const [paisError, setPaisError] = useState('');
    const [nomeError, setNomeError] = useState('');
    const [ruaError, setRuaError] = useState('');
    const [numeroError, setNumeroError] = useState('');
    const [bairroError, setBairroError] = useState('');
    const [cidadeError, setCidadeError] = useState('');
    const [numeroInvalido, setNumeroInvalido] = useState(false);


    

    function cadastrar() {

        if (cep.length !== 8) {
            setCepError('CEP inválido');
            return;
        } else {
            setCepError('');
        }

        if (estado.length !== 2) {
            setEstadoError('Digite a sigla! ex: SP');
            return;
        } else {
            setEstadoError('');
        }

        if (pais.length !== 3) {
            setPaisError('Digite a sigla! ex: BRA');
            return;
        } else {
            setPaisError('');
        }

        if (nomeCompleto === '') {
            setNomeError('Nome inválido');
            return;
        }

        if (rua === '') {
            setRuaError('Rua inválida');
            return;
        }

        if (numero === '') {
            setNumeroError('Número inválido');
            return;
        }

        if (bairro === '') {
            setBairroError('Bairro inválido');
            return;
        }

        if (cidade === '') {
            setCidadeError('Cidade inválida');
            return;
        }

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setCadastroSuccess(true);
            })
            .catch((error) => {
                const errorMessage = error.message;
                const errorEmail = 'Email inválido';
                const errorSenha = 'Senha inválida (min 6 caracteres)';
                console.log(errorMessage);
                setCadastroSuccess(false);
                setEmailError(errorEmail);
                setSenhaError(errorSenha);
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
                            onChangeText={(text) => {
                                setNomeCompleto(text);
                                if (text !== '') {
                                    setNomeError('');
                                }
                            }}
                        />
                        {emailError && (<Text style={styles.errorMessage}>{emailError}</Text>)}
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text);
                                if (text.trim() !== '') {
                                    setEmailError('');
                                }
                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                if (emailRegex.test(text)) {
                                    setEmailError('');
                                } else {
                                    setEmailError('Email inválido');
                                }
                            }}
                        />
                        {senhaError && (<Text style={styles.errorMessage}>{senhaError}</Text>)}
                        <Text style={styles.inputLabel}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            value={senha}
                            onChangeText={(text) => {
                                setSenha(text);
                                if (text !== '') {
                                    setSenhaError('');
                                }
                            }}
                            secureTextEntry
                        />
                        {cepError && (<Text style={styles.errorMessage}>{cepError}</Text>)}
                        <Text style={styles.inputLabel}>CEP</Text>   
                        <TextInput
                            style={styles.input}
                            value={cep}
                            onChangeText={(text) => {
                                setCep(text);
                                if (text.length === 8) {
                                    setCepError('');
                                }
                            }}
                            keyboardType="numeric"
                        />
                        {ruaError && (<Text style={styles.errorMessage}>{ruaError}</Text>)}
                        <Text style={styles.inputLabel}>Rua</Text>
                        <TextInput
                            style={styles.input}
                            value={rua}
                            onChangeText={(text) => {
                                setRua(text);
                                if (text !== '') {
                                    setRuaError('');
                                }
                            }}
                        />
                        {numeroError && (<Text style={styles.errorMessage}>{numeroError}</Text>)}
                        <Text style={styles.inputLabel}>Número</Text>
                        <TextInput
                            style={styles.input}
                            value={numero}
                            onChangeText={(text) => {
                                setNumero(text);
                                if (text !== '') {
                                    setNumeroError('');
                                }
                            }}
                            keyboardType="numeric"
                        />
                        {bairroError && (<Text style={styles.errorMessage}>{bairroError}</Text>)}
                        <Text style={styles.inputLabel}>Bairro</Text>
                        <TextInput
                            style={styles.input}
                            value={bairro}
                            onChangeText={(text) => {
                                setBairro(text);
                                if (text !== '') {
                                    setBairroError('');
                                }
                            }}
                        />
                        {cidadeError && (<Text style={styles.errorMessage}>{cidadeError}</Text>)}
                        <Text style={styles.inputLabel}>Cidade</Text>
                        <TextInput
                            style={styles.input}
                            value={cidade}
                            onChangeText={(text) => {
                                setCidade(text);
                                if (text !== '') {
                                    setCidadeError('');
                                }
                            }}
                        />
                        {estadoError && (<Text style={styles.errorMessage}>{estadoError}</Text>)}
                        <Text style={styles.inputLabel}>Estado</Text>
                        <TextInput
                            style={styles.input}
                            value={estado}
                            onChangeText={(text) => {
                                setEstado(text);
                                if (text.length === 2) {
                                    setEstadoError('');
                                }
                            }}
                        />
                        {paisError && (<Text style={styles.errorMessage}>{paisError}</Text>)}
                        <Text style={styles.inputLabel}>País</Text>
                        <TextInput
                            style={styles.input}
                            value={pais}
                            onChangeText={(text) => {
                                setPais(text);
                                if (text.length === 3) {
                                    setPaisError('');
                                }
                            }}
                        />

                        <TouchableOpacity onPress={cadastrar} style={styles.signupButton}>
                            <Text style={styles.signupButtonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={login} style={styles.finalButton}>
                    <Text style={styles.signupText}>Entre aqui</Text>
                </TouchableOpacity>
                {cadastroSuccess && (
                    <TouchableOpacity style={styles.additionalButton} onPress={() => setCadastroSuccess(false)}>
                        <Text style={styles.additionalButtonText}>Tudo certo, faça o login!</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 150,
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
        marginLeft: 10,
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
    additionalButton: {
        marginTop: -15,
        backgroundColor: '#98DA9E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    additionalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
});