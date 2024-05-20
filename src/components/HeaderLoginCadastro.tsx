import React from "react";
import { View, StyleSheet, Image, StatusBar, SafeAreaView } from "react-native";

export default function HeaderLoginCadastro() {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#3F7E00" barStyle="light-content"/>
            <Image
                source={require('../../assets/SavvyFix2.png')}
                style={styles.logo}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3F7E00',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: -30
    },
    logo: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        marginBottom: 10,
        marginTop: -10,
    },
});
