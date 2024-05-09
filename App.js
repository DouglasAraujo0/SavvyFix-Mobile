import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/github.png')}
          style={styles.logo}           
        />
        <View style={styles.HeaderImagesContainer}>
          <Image
            source={require('./assets/instagram.png')}
            style={styles.rightImage}           
          />
          <Image
            source={require('./assets/twitter.png')}
            style={styles.rightImage}           
          />
          <Image
            source={require('./assets/twitter.png')}
            style={styles.rightImage}           
          />
        </View>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutText}>Sobre a SavvyFix</Text>
      </View>

      <View style={styles.optionContainer}>
        <Image
          source={require('./assets/twitter.png')}
          style={styles.image}            
        />
        <Text>Tênis Casual</Text>
      </View>

      <View style={styles.optionContainer}>
        <Image
          source={require('./assets/twitter.png')}
          style={styles.image}            
        />
        <Text>Tênis Esportivo</Text>
      </View>

      <View style={styles.optionContainer}>
        <Image
          source={require('./assets/twitter.png')}
          style={styles.image}            
        />
        <Text>Outros Tipos</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.textContainer}>
          <Text style={styles.turmapf}>2TDSPF</Text>
        </View>
        <View style={styles.rightImagesContainer}>
          <Image
            source={require('./assets/github.png')}
            style={styles.image}            
          />
          <Image 
            source={require('./assets/instagram.png')}
            style={styles.image}            
          />
          <Image
            source={require('./assets/twitter.png')}
            style={styles.image}            
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alinhar as imagens verticalmente no centro
    backgroundColor: 'green',
    width: '100%',
    paddingHorizontal: 20, // Adiciona espaço horizontal
    paddingVertical: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  turmapf: {
    fontSize: 20,
    color: 'white', 
    textAlign: 'center',
  },
  textContainer: {
    marginBottom: 10, // Adiciona espaço entre o texto e as imagens
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    marginRight: 20, // Adiciona espaço entre a logo e as outras imagens
  },
  HeaderImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Espaçamento entre as imagens
    alignItems: 'center', // Centraliza as imagens verticalmente
    width: '100%',
    paddingRight: 20, // Adiciona espaço à direita
  },
  rightImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espaçamento entre as imagens
    alignItems: 'center', // Centraliza as imagens verticalmente
    width: '100%',
  },
  rightImage: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    marginLeft: 20, // Adiciona espaço entre as imagens à direita
  },
  aboutContainer: {
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10, 
    marginVertical: 20, 
    width: '100%',
    alignItems: 'center',
  },
  aboutText: {
    fontSize: 18,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
