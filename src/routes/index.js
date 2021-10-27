import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserLogin } from '../../src/components/UserLogin/index';
import { RecoveryPassword } from '../../src/components/RecoveryPassword/index';
import { ResendMailPassword } from '../../src/components/ResendMail/index';


const Stack = createNativeStackNavigator();

export function Router() {
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName="UserLogin"
            screenOptions={{ headerShown: false }}
         >
            <Stack.Screen name="UserLogin" component={UserLogin} />
            <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
            <Stack.Screen name="ResendMailPassword" component={ResendMailPassword} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}