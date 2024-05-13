import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.textContainer}>
        <Text style={styles.turmapf}>2TDSPF</Text>
      </View>
      <View style={styles.rightImagesContainer}>
        <Image
          source={require('../../assets/github.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/instagram.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/twitter.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    marginHorizontal: 5,
  },
  rightImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
