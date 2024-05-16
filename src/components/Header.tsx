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
        <TouchableOpacity style={styles.touchableArea} onPress={home}>
          <Image
            source={require('../../assets/twitter.jpg')}
            style={styles.rightImage}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.touchableArea} onPress={carrinho}>
          <Image
            source={require('../../assets/twitter.jpg')}
            style={styles.rightImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableArea} onPress={login}>
          <Image
            source={require('../../assets/twitter.jpg')}
            style={styles.rightImage}
          />
        </TouchableOpacity>
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
    borderRadius: 100 / 2,
    marginRight: 20,
  },
  touchableArea: {
    marginLeft: 10,
  },
  rightImage: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    
  },
});