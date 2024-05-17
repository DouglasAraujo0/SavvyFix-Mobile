import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderLoginCadastro from "../components/HeaderLoginCadastro";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const navigation = useNavigation();

    const cadastro = () => {
        navigation.navigate('Cadastro');
    };
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showSuccessButton, setShowSuccessButton] = useState(false);
    const [showErrorButton, setShowErrorButton] = useState(false);

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setShowSuccessButton(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setShowErrorButton(true);
            });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
            <HeaderLoginCadastro/>
            <View style={styles.formContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>LOGIN</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu Email"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={styles.inputLabel}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        onChangeText={(text) => setSenha(text)}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 200
    },
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
