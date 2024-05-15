import React from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderLoginCadastro from "../components/HeaderLoginCadastro";

export default function Login() {
    const navigation = useNavigation();

    const cadastro = () => {
        navigation.navigate('Cadastro');
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
                    />
                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={() => alert('Cadastrado com sucesso!')}>
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={cadastro} style={styles.signupButton}>
                    <Text style={styles.signupText}>Cadastre-se aqui</Text>
                </TouchableOpacity>
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
        backgroundColor: 'gray',
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
        backgroundColor: 'gray',
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
        backgroundColor: "#7ad98d",
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
});
