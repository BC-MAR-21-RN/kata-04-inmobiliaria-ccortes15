import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/HomeScreen';
import ItemList from './src/ItemList';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Home" options={{ title: '' }} component={HomeScreen} />
          <Stack.Screen name="ItemList" options={{title: 'Casas disponibles'}} component={ItemList} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

export default App;
