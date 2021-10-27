import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/signIn/index';
import { RecoveryPassword } from './src/screens/recovery/index';
import { ResendMailPassword } from './src/screens/resendMail/index';
import { Home } from './src/screens/home/index'


const Stack = createNativeStackNavigator();

export default function App() {
   const [fontsLoaded] = useFonts({
      Roboto_400Regular
   });

   if (!fontsLoaded) {
      return <AppLoading />
   }

   return (
      <NavigationContainer>
         <Stack.Navigator 
            initialRouteName="SignIn" 
            screenOptions={{headerShown: false}} 
         >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
            <Stack.Screen name="ResendMailPassword" component={ResendMailPassword} />
            <Stack.Screen name="Home" component={Home} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
