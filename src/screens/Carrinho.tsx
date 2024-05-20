import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/useCart';

export default function Carrinho() {
    const navigation = useNavigation();
    const { cartItems, addToCart } = useCart();

    const sobre = () => {
        navigation.navigate('Sobre');
    };

    const home = () => {
        navigation.navigate('Home');
    };

    const incrementItemCount = (item) => {
        addToCart(item);
    };

    const viewDetails = () => {
        // Aqui você pode implementar a lógica para ver mais detalhes do item
    };

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
            <TouchableOpacity onPress={sobre}>
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutText}>Sobre a SavvyFix</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.aboutContainerCarrinho}>
                <Text style={styles.aboutText}>Carrinho</Text>
            </View>

            {cartItems.length > 0 ? (
                <View style={styles.sneakersContainer}>
                    {cartItems.map((item, index) => (
                        <View key={index} style={styles.sneakerCard}>
                            <Image source={item.image} style={styles.sneakerImage} />
                            <View style={styles.sneakerDetails}>
                                <Text style={styles.sneakerName}>{item.name}</Text>
                                <Text style={styles.sneakerPrice}>{item.price}</Text>
                            </View>
                            <View style={styles.bottomButtonsContainer}>
                                <TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={() => incrementItemCount(item)}>
                                    <Text style={styles.buttonText}>pau</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={() => incrementItemCount(item)}>
                                    <Text style={styles.buttonText}>Adicionar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.viewDetailsButton]} onPress={viewDetails}>
                                    <Text style={styles.buttonText}>Ver Mais</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            ) : (
                <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
            )}

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
        marginVertical: 25,
        alignItems: 'center',
        width: '100%',
    },
    aboutContainerCarrinho: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        width: '40%',
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
        backgroundColor: '#3F7E00',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
        alignItems: 'center',
        width: '95%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginLeft: 5,
        marginRight: 140,
        marginBottom: 65,
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        marginLeft: -150
    },
    button: {
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft: 2,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#000',
    },
    emptyCartText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
    },
    homeContainer: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        alignItems: 'center',
        width: '30%',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    homeText: {
        fontSize: 18,
        textAlign: 'center',
    },
    addToCartButton: {
        backgroundColor: '#D7CCB5',
    },
    viewDetailsButton: {
        backgroundColor: '#D7CCB5',
    },
});
