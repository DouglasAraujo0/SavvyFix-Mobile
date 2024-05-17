import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Esportivo() {

    const navigation = useNavigation();

    const sobre = () => {
        navigation.navigate('Sobre');
    }
    const home = () => {
        navigation.navigate('Home');
    }

    const sneakers = [
        { id: 1, name: 'Tênis 1', price: 'R$199,99', image: require('../../assets/twitter.jpg') },
        { id: 2, name: 'Tênis 2', price: 'R$269,58', originalPrice: 'R$379,99', image: require('../../assets/twitter.jpg') },
        { id: 3, name: 'Tênis 3', price: 'R$89,99', image: require('../../assets/twitter.jpg') },
        { id: 4, name: 'Tênis 4', price: 'R$304,97', originalPrice: 'R$329,99', image: require('../../assets/twitter.jpg') },
    ];
    
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
            <TouchableOpacity onPress={sobre}>
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutText}>Sobre a SavvyFix</Text>
                </View>
            </TouchableOpacity>
        
            <View style={styles.aboutContainerEsportivo}>
                <Text style={styles.aboutText}>Tênis Esportivo</Text>
            </View>

            <View style={styles.sneakersContainer}>
                {sneakers.map(sneaker => (
                    <View key={sneaker.id} style={styles.sneakerCard}>
                        <View style={styles.sneakerInfoContainer}>
                            <Image source={sneaker.image} style={styles.sneakerImage} />
                            <View style={styles.sneakerDetails}>
                                <Text style={styles.sneakerName}>{sneaker.name}</Text>
                                <Text style={styles.sneakerPrice}>{sneaker.price}</Text>
                                {sneaker.originalPrice && (
                                    <Text style={styles.sneakerOriginalPrice}>{sneaker.originalPrice}</Text>
                                )}
                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Adicionar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button}>
                                        <Text style={styles.buttonText}>Ver mais</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

            <TouchableOpacity onPress={home}>
                <View style={styles.homeContainer}>
                    <Text style={styles.homeText}>Home</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    aboutContainer: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        width: '100%',
    },
    aboutContainerEsportivo: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        width: 'auto',
        alignSelf: 'flex-start',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: 'center',
    },
    aboutText: {
        fontSize: 18,
        textAlign: 'center',
    },
    sneakersContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sneakerCard: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sneakerInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    sneakerImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    sneakerDetails: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    sneakerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    sneakerPrice: {
        fontSize: 16,
        color: '#fff',
        paddingBottom: 30,
    },
    sneakerOriginalPrice: {
        fontSize: 14,
        color: '#FFD700',
        textDecorationLine: 'line-through',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#8BC34A',
        padding: 5,
        borderRadius: 20,
        marginHorizontal: 8,
    },
    buttonText: {
        color: '#fff',
    },
    homeContainer: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        width: '41%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    homeText: {
        fontSize: 18,
        textAlign: 'center',
    },
});