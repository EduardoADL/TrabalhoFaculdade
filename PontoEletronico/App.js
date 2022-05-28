import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Formulario from './screens/formulario/Formulario'
import Inicial from  './screens/Inicial/Inical'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Inicial'
        screenOptions={{
          headerShown: false
        }}
      >
         <Stack.Screen name="Inicial" component={Inicial}  />
        <Stack.Screen name="Formulario" component={Formulario}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

