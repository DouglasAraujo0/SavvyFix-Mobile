import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Carrinho from './src/screens/Carrinho'; 
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Login from './src/screens/Login';
import Sobre from './src/screens/Sobre';
import Casual from './src/screens/Casual';
import Esportivo from './src/screens/Esportivo';
import Outros from './src/screens/Outros';
import Cadastro from './src/screens/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <>
        <Header /> 
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Carrinho" component={Carrinho} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Sobre" component={Sobre} options={{headerShown: false}} />
          <Stack.Screen name="Casual" component={Casual} options={{headerShown: false}} />
          <Stack.Screen name="Esportivo" component={Esportivo} options={{headerShown: false}} />
          <Stack.Screen name="Outros" component={Outros} options={{headerShown: false}} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
        </Stack.Navigator>
        <Footer /> 
      </>
    </NavigationContainer>
  );
}
