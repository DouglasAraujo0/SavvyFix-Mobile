import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const sobre = () => {
        navigation.navigate('Sobre');
    }
    const casual = () => {
        navigation.navigate('Casual');
    }
    const esportivo = () => {
        navigation.navigate('Esportivo');
    }
    const outros = () => {
        navigation.navigate('Outros'); 
    }   
    
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={sobre}>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutText}>Sobre a SavvyFix</Text>
            </View>
          </TouchableOpacity>

          <ScrollView>
          <TouchableOpacity onPress={casual}>
            <View style={styles.optionContainer}>
              <View style={styles.square}>
                <Image
                  source={require('../../assets/twitter.png')}
                  style={styles.imageInside}            
                />
                <Text style={styles.optionName}>Tênis Casual</Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={esportivo}>
            <View style={styles.optionContainer}>
              <View style={styles.square}>
                <Image
                  source={require('../../assets/twitter.png')}
                  style={styles.imageInside}            
                />
                <Text style={styles.optionName}>Tênis Esportivo</Text>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={outros}>
            <View style={styles.optionContainer}>
              <View style={styles.square}>
                <Image
                  source={require('../../assets/twitter.png')}
                  style={styles.imageInside}            
                />
                <Text style={styles.optionName}>Outros Tipos</Text>
              </View>
            </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  aboutContainer: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10, 
    marginVertical: 20, 
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row', // Alterado para flex direction row
    justifyContent: 'space-between', // Adicionado
  },
  aboutText: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  square: {
    width: 200,
    height: 160,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageInside: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  optionName: {
    marginTop: 5,
    backgroundColor: 'yellow',
    padding: 17,
    width: 200,
    textAlign: 'center',
  }
});
