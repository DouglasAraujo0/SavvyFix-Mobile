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
import HeaderLoginCadastro from './src/components/HeaderLoginCadastro';
import { CartProvider } from './src/context/useCart';
import Error404 from './src/screens/Error404';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer fallback={<Error404/>}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ header: () => <Header /> }} />
          <Stack.Screen name="Carrinho" component={Carrinho} options={{ header: () => <Header /> }} />
          <Stack.Screen name="Sobre" component={Sobre} options={{ header: () => <Header /> }} />
          <Stack.Screen name="Casual" component={Casual} options={{ header: () => <Header /> }} />
          <Stack.Screen name="Esportivo" component={Esportivo} options={{ header: () => <Header /> }} />
          <Stack.Screen name="Outros" component={Outros} options={{ header: () => <Header /> }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ header: () => <HeaderLoginCadastro />, headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ header: () => <HeaderLoginCadastro />, headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer /> 
    </CartProvider>
  );
}
