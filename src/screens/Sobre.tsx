import React from "react"
import { Image, View, Text, Button } from "react-native"

export default function Sobre() {
    return (
        <View>
            <View>
                <Image
                    source={require('../assets/github.png')}
                    // style={styles.logo}            
                    />
                <Image
                    source={require('../assets/instagram.png')}
                    // style={styles.logo}            
                />
                <Image
                    source={require('../assets/twitter.png')}
                    // style={styles.logo}            
                />
                <Image
                    source={require('../assets/twitter.png')}
                    // style={styles.logo}            
                />
        </View>

        <View>
            <Text>Sobre a SavvyFix</Text>
        </View>

        <View>
            <Text>A SavvyFix traz a solução para empresas que vendem produtos on-line se adaptarem em um mundo tão flexível!</Text>
        </View>

        <View>
            <Image
                source={require('../assets/twitter.png')}
                // style={styles.logo}            
            />
            <Text>Mas não se engane! Esse site de tênis é totalmente fictício e tem o objetivo apenas de demonstrar a solução da SavvyFix na prática.</Text>
        </View>

        <View>
            <Text>Nesse sentido, a SavvyFix traz preços dinâmicos aos produtos vendidos digitalmente por meio da análise de demandas e condições a partir do comportamento de um ou mais clientes, independente de qual seja o ramo da empresa</Text>
        </View>

        <View>
            <Text>Isso por meio:</Text>
            <Image
                source={require('../assets/twitter.png')}
                // style={styles.logo}            
            />
            <Text>do horário de compra pelo cliente</Text>
            <Text>da localização atual do cliente</Text>
            <Text>do clima de onde a pessoa está</Text>
            <Text>da quantidade de procura por uma pessoa</Text>
            <Text>da oferta e demanda de um produto</Text>

            <Button
                title="Vem com a gente!"
            />
        </View>
        
        <View>
            <Text>2TDSPF</Text>
            <Image
                source={require('../assets/github.png')}
                // style={styles.logo}            
            />
            <Image
                source={require('../assets/instagram.png')}
                // style={styles.logo}            
            />
            <Image
                source={require('../assets/twitter.png')}
                // style={styles.logo}            
            />
        </View>
      </View>
    )
}