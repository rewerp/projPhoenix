import React, { setState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';

import { styles } from './styles';

import LogoApp from '../../assets/logoPhoenix.png';
import LogoDobes from '../../assets/logoDobes.png';

import { UserLogin } from '../../components/UserLogin/index';
import { RecoveryPassword } from '../../components/RecoveryPassword/index';
import { ResendMailPassword } from '../../components/ResendMail/index';

export function LoginScreen({ navigation }) {
   return (
      <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }} >
         <View style={styles.mainView} >
            <View style={styles.topImgView} >
               <StatusBar
                  barStyle="light-content"
                  backgroundColor="transparent"
                  translucent
               />
               <Image
                  style={styles.logoApp}
                  source={LogoApp}
               />
            </View>
            <View style={styles.componentsView} >


               <NavigationContainer>
                  <Stack.Navigator
                     initialRouteName="SignIn"
                     screenOptions={{ headerShown: false }}
                  >
                     <Stack.Screen name="SignIn" component={SignIn} />
                     <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
                     <Stack.Screen name="ResendMailPassword" component={ResendMailPassword} />
                  </Stack.Navigator>
               </NavigationContainer>


            </View>
            <View style={styles.bottomImgView} >
               <TouchableOpacity onPress={() => Linking.openURL('https://dobesone.com.br/')} >
                  <Image
                     style={styles.logoDobes}
                     source={LogoDobes}
                  />
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   )
}