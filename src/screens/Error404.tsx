import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
 
export default function Error404() {
 
    <View style={styles.container}>
        <Image
            source={require('../../assets/SavvyFix2.png')}
            style={styles.image}
        />
        <Text>Erro 404!</Text>
        <Text>Página não encontrada.</Text>
    </View>
}
 
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: 'green'
    },
    errorText:{
        fontWeight: 'bold',
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        marginRight: 20,
    }
})