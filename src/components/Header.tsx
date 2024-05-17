import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export default function Header() {
  const navigation = useNavigation();

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
            <Image
              source={require('../../assets/icons8-shopping-cart-90.png')}
              style={styles.rightImage}
            />
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
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3F7E00',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
});
