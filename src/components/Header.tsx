import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/useCart';

export default function Header() {
  const navigation = useNavigation();
  const { cartCount } = useCart();
  const [localCartCount, setLocalCartCount] = useState(0);

  useEffect(() => {
    setLocalCartCount(cartCount);
  }, [cartCount]);

  const carrinho = () => {
    navigation.navigate('Carrinho');
  };

  const home = () => {
    navigation.navigate('Home');
  };

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3F7E00" />
      <View style={styles.header}>
        <Image
          source={require('../../assets/SavvyFix2.png')}
          style={styles.logo}
        />
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.touchableArea} onPress={home}>
            <Image
              source={require('../../assets/icons8-home-250.png')}
              style={styles.rightImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableArea} onPress={carrinho}>
            <View style={styles.cartContainer}>
              <Image
                source={require('../../assets/icons8-shopping-cart-90.png')}
                style={styles.rightImage}
              />
              {localCartCount > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{localCartCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableArea} onPress={login}>
            <Image
              source={require('../../assets/icons8-team-96.png')}
              style={styles.rightImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F7E00',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3F7E00',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableArea: {
    marginLeft: 10,
    paddingRight: 10,
  },
  rightImage: {
    width: 45,
    height: 45,
  },
  cartContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
