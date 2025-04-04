import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Header from './src/components/Header'; 
import colors from './src/utils/colors';

//CRITERIO 2: Configuración correcta de navegación

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* Configuración de la barra de estado */}
      <StatusBar 
        backgroundColor={colors.primary} 
        barStyle="light-content" 
      />
      
      {/* Navegación principal */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => (
              <Header 
                {...props} 
                title="Gestión de Piezas" 
                showBackButton={false} 
              />
            ),
            cardStyle: {
              backgroundColor: colors.background, // Fondo general
            },
          }}
        >
          {/* Pantalla principal */}
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}