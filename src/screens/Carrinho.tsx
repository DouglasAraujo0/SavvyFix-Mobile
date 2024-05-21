import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/useCart';

export default function Carrinho() {
    const navigation = useNavigation();
    const { cartItems, addToCart, removeFromCart } = useCart();

    const sobre = () => {
        navigation.navigate('Sobre');
    };

    const home = () => {
        navigation.navigate('Home');
    };

    const incrementItemCount = (item) => {
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            addToCart(updatedCartItems[existingItemIndex]);
        } else {
            addToCart({ ...item, quantity: 1 });
        }
    };

    const viewDetails = () => {
        // Lógica para ver mais detalhes do item
    };

    const removeItemFromCart = (item) => {
        removeFromCart(item);
    };

    // Calcular o total da compra
    const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity), 0);

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

            <View style={styles.sneakersContainer}>
                {cartItems.length > 0 ? (
                    <>
                        {cartItems.map((item, index) => (
                            <View key={index} style={styles.sneakerCard}>
                                <Image source={item.image} style={styles.sneakerImage} />
                                <View style={styles.sneakerDetails}>
                                    <Text style={styles.sneakerName}>{item.name}</Text>
                                    <Text style={styles.sneakerPrice}>{item.price}</Text>
                                    
                                </View>
                                <View style={styles.bottomButtonsContainer}>
                                    <Text style={styles.quantityText}>{item.quantity.toString()}</Text>
                                    <TouchableOpacity style={[styles.button, styles.removeButton]} onPress={() => removeItemFromCart(item)}>
                                        <Text style={styles.buttonText}>Excluir</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.button, styles.viewDetailsButton]} onPress={viewDetails}>
                                        <Text style={styles.buttonText}>Ver Mais</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                        <View style={styles.totalContainer}>
                            <Text style={styles.totalText}>Total da compra: R${total.toFixed(2)}</Text>
                        </View>
                    </>
                ) : (
                    <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
                )}
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
    additionalButton: {
        backgroundColor: '#D7CCB5',
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
        marginLeft: -190,
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
    removeButton: {
        backgroundColor: '#D7CCB5',
    },
    viewDetailsButton: {
        backgroundColor: '#D7CCB5',
    },
    quantityText: {
        backgroundColor: '#D7CCB5',
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: 10,
    },
    totalContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'flex-end',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
