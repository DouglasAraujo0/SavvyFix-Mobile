import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View>
        <Image
          source={require('../assets/github.png')}
          //style={styles.logo}            
        />
        <Image
          source={require('../assets/instagram.png')}
          //style={styles.logo}            
        />
        <Image
          source={require('../assets/twitter.png')}
          //style={styles.logo}            
        />
        <Image
          source={require('../assets/twitter.png')}
          //style={styles.logo}            
        />
      </View>

      <View>
        <Text>Sobre a SavvyFix</Text>
      </View>

      <View>
        <Image
          source={require('../assets/twitter.png')}
          //style={styles.logo}            
        />
        <Text>Tênis Casual</Text>
      </View>

      <View>
        <Image
          source={require('../assets/twitter.png')}
          //style={styles.logo}            
        />
        <Text>Tênis Esportivo</Text>
      </View>

      <View>
        <Image
          source={require('../assets/twitter.png')}
          //style={styles.logo}            
        />
        <Text>Outros Tipos</Text>
      </View>

      
      <View>
        <Text>2TDSPF</Text>
          <Image
            source={require('../assets/github.png')}
            //style={styles.logo}            
          />
          <Image
            source={require('../assets/instagram.png')}
            //style={styles.logo}            
          />
          <Image
            source={require('../assets/twitter.png')}
            //style={styles.logo}            
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
    justifyContent: 'center',
  },
});
