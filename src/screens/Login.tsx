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
                <Text>LOGIN</Text>
            </View>

            <View>
                <Text>CPF</Text>
                <Text>Senha</Text>
                <Button
                    title="Entrar"
                    onPress={() => alert('Cadastrado com sucesso!')}
                />
                <Text>Cadastre-se aqui</Text>
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