import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Home Screen</Text>
         <Button title="Navegar" onPress={() => navigation.navigate('DetailsScreen')} />
      </View>
   );
}

function DetailsScreen() {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Details Screen</Text>
      </View>
   );
}

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
