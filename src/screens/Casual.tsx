import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Casual() {
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
        <ScrollView>
            <TouchableOpacity onPress={sobre}>
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutText}>Sobre a SavvyFix</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.aboutContainer}>
                <Text style={styles.aboutText}>Tênis Casual</Text>
            </View>

            <View style={styles.sneakersContainer}>
                {sneakers.map(sneaker => (
                    <View key={sneaker.id} style={styles.sneakerCard}>
                        <Image source={sneaker.image} style={styles.sneakerImage} />
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

                        <TouchableOpacity onPress={home}>
                            <View style={styles.aboutContainer}>
                                <Text style={styles.aboutText}>Home</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    aboutText: {
        fontSize: 18,
        textAlign: 'center',
        flex: 1,
    },
    sneakersContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 10,
    },
    sneakerCard: {
        backgroundColor: '#4CAF50',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        width: '90%',
    },
    sneakerImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    sneakerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    sneakerPrice: {
        fontSize: 16,
        color: '#fff',
    },
    sneakerOriginalPrice: {
        fontSize: 14,
        color: '#FFD700',
        textDecorationLine: 'line-through',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#8BC34A',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
    },
});
