import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function HeaderLoginCadastro() {
    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/SavvyFix2.png')}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#3F7E00',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    logo: {
        width: 65,
        height: 65,
        borderRadius: 32.5,
        marginBottom: 10,
        marginTop: -10,
    },
});
