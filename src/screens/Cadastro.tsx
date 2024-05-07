import React from "react"
import { View, Text, Image, StyleSheet, Button } from "react-native"

export default function Cadastro() {

    return (
        <View>
            <View>
                <Image
                    source={require('../assets/logo.png')}
                    //style={styles.logo}            
                />
            </View>

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

            <View>
                <Text>2TDSPF</Text>
                <Image
                    source={require('../assets/github.png')}
                    //style={styles.logo}            
                />
                <Image
                    source={require('../assets/instagram.png')}
                    //style={styles.logo}            
                />
                <Image
                    source={require('../assets/twitter.png')}
                    //style={styles.logo}            
                />
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