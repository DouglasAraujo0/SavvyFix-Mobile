import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/useCart';

export default function Casual() {
    const navigation = useNavigation();
    const { cartItems, addToCart } = useCart();

    const sobre = () => {
        navigation.navigate('Sobre');
    };

    const home = () => {
        navigation.navigate('Home');
    };

    const addItemToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            addToCart({ ...item, quantity: existingItem.quantity + 1 }); 
        } else {
            addToCart({ ...item, quantity: 1 }); 
        }
    };

    const viewDetails = () => {
        // Função para visualizar detalhes do item
    };

    const sneakers = [
        { id: 1, name: 'Viseno', price: 'R$199,99', image: require('../../assets/casual1.jpeg') },
        { id: 2, name: 'BY JACK', price: 'R$269,58', originalPrice: 'R$379,99', image: require('../../assets/casual2.jpeg') },
        { id: 3, name: 'Multitare', price: 'R$89,99', image: require('../../assets/casual3.jpeg') },
        { id: 4, name: 'Nobuk', price: 'R$304,97', originalPrice: 'R$329,99', image: require('../../assets/casual4.jpeg') },
    ];

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
            <TouchableOpacity onPress={sobre}>
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutText}>Sobre a SavvyFix</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.aboutContainerCasual}>
                <Text style={styles.aboutText}>Tênis Casual</Text>
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
                                    <TouchableOpacity style={styles.button} onPress={() => addItemToCart(sneaker)}>
                                        <Text style={styles.buttonText}>Adicionar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button} onPress={viewDetails}>
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
    aboutContainerCasual: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        width: '41%',
        alignSelf: 'flex-start',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
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
        backgroundColor: '#3F7E00',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
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
        marginTop: 10,
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
        fontSize: 13,
        color: '#FFD700',
        textDecorationLine: 'line-through',
        marginTop: -25,
        marginBottom: 20,
        marginLeft: 40,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#D7CCB5',
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft: 2,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#000',
    },
    homeContainer: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        width: '35%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    homeText: {
        fontSize: 18,
        textAlign: 'center',
    },
});