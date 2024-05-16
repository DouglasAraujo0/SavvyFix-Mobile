import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
    const navigation = useNavigation();

    const sobre = () => {
        navigation.navigate('Sobre');
    }
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={sobre} style={styles.aboutContainer}>
                    <Text style={styles.aboutText}>Sobre a SavvyFix</Text>
                </TouchableOpacity>

                <View style={styles.section}>
                    <Text style={styles.text}>A SavvyFix traz a solução para empresas que vendem produtos on-line se adaptarem em um mundo tão flexível!</Text>
                </View>

                <View style={styles.section1}>
                    <View style={styles.imageWithText}>
                        <Image
                            source={require('../../assets/twitter.png')}
                            style={styles.image}
                        />
                        <Text style={styles.subText}>Mas não se engane! Esse site de tênis é totalmente fictício e tem o objetivo apenas de demonstrar a solução da SavvyFix na prática.</Text>
                    </View>
                </View>

                <View style={styles.sentido}>
                    <Text style={styles.text}>Nesse sentido, a SavvyFix traz preços dinâmicos aos produtos vendidos digitalmente por meio da análise de demandas e condições a partir do comportamento de um ou mais clientes, independente de qual seja o ramo da empresa</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text2}>Isso por meio:</Text>
                    <Text style={styles.itemText}>• do horário de compra pelo cliente</Text>
                    <Text style={styles.itemText}>• da localização atual do cliente</Text>
                    <Text style={styles.itemText}>• do clima de onde a pessoa está</Text>
                    <Text style={styles.itemText}>• da quantidade de procura por uma pessoa</Text>
                    <Text style={styles.itemText}>• da oferta e demanda de um produto</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Vem com a gente!</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    section: {
        marginBottom: 20,
    },
    section1: {
        backgroundColor: '#D9D9D9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    text2: {
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    subText: {
        fontSize: 14,
        textAlign: 'left',
        marginLeft: 10,
        marginTop: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 5,
    },
    button: {
        backgroundColor: '#D7CCB5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    aboutContainer: {
        width: '100%',
        backgroundColor: '#D7CCB5',
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    aboutText: {
        fontSize: 18,
        textAlign: 'center',
    },
    imageWithText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    sentido: {
        padding: 30,
        textAlign: 'left',
        maxHeight: 232,
    },
});
