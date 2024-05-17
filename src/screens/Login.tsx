import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderLoginCadastro from "../components/HeaderLoginCadastro";
import { firebase } from "../services/FirebaseConfig"; 

export default function Login() {
    const navigation = useNavigation();

    const cadastro = () => {
        navigation.navigate('Cadastro');
    };
    
    const [cpf, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showSuccessButton, setShowSuccessButton] = useState(false);
    const [showErrorButton, setShowErrorButton] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(cpf, senha);
            setShowSuccessButton(true);
        } catch (error) {
            setShowErrorButton(true);
        }
    };

    return (
        <View style={styles.container}>
            <HeaderLoginCadastro/>
            <View style={styles.formContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>LOGIN</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>CPF</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu CPF"
                        keyboardType="numeric"
                        onChangeText={(text) => setCPF(text)}
                    />
                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        onChangeText={(text) => setSenha(text)}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={() => alert('Cadastrado com sucesso!')}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={cadastro} style={styles.signupButton}>
                    <Text style={styles.signupText}>Cadastre-se aqui</Text>
                </TouchableOpacity>

                {(showSuccessButton || showErrorButton) && (
                    <View style={styles.centeredButtons}>
                        {showSuccessButton && (
                            <TouchableOpacity style={styles.successButton} onPress={() => setShowSuccessButton(false)}>
                                <Text style={styles.successButtonText}>Seja bem-vindo!</Text>
                            </TouchableOpacity>
                        )}

                        {showErrorButton && (
                            <TouchableOpacity style={styles.errorButton} onPress={() => setShowErrorButton(false)}>
                                <Text style={styles.errorButtonText}>CPF e/ou senha incorretos!</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        marginBottom: 20,
        backgroundColor: '#D7CCB5',
        borderRadius: 10,
        padding: 7,
        paddingTop: 7,
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
    loginButton: {
        alignSelf: 'flex-end',
        backgroundColor: "#98DA9E",
        paddingVertical: 3,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15,
    },
    loginButtonText: {
        color: "#000",
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupButton: {
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    signupText: {
        color: '#000',
        fontSize: 16,
    },
    centeredButtons: {
        alignItems: 'center',
    },
    successButton: {
        backgroundColor: '#98DA9E',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    successButtonText: {
        color: '#000',
        fontSize: 16,
    },
    errorButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    errorButtonText: {
        color: '#000',
        fontSize: 16,
    },
    
});
