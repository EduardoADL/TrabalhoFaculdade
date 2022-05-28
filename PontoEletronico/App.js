import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Formulario from './components/formulario/Formulario'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Formulario'>
        <Stack.Screen name="Formulario" component={Formulario} options={{ title:'Ponto Eletronico'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

