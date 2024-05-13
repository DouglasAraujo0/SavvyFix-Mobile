import React from "react"
import { View, Text, Image, StyleSheet, Button } from "react-native"
import { useState } from 'react';
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../services/FirebaseConfig';

export default function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function cadastrar () {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage)
      });
      }

    return (
        <View>

            <View>
                <Text>CADASTRO</Text>
            </View>

            <View>
                <Text>Nome Completo</Text>
                <Text>CPF</Text>
                <Text>Senha</Text>
                <Text>CEP</Text>
                <Text>Rua</Text>
                <Text>Número</Text>
                <Text>Bairro</Text>
                <Text>Cidade</Text>
                <Text>Estado</Text>
                <Text>País</Text>
                <Button
                    title="Cadastrar"
                    onPress={() => alert('Cadastrado com sucesso!')}
                />
                <Text>Entre aqui</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
    }
})