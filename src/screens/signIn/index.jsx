import React, { setState, useState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';

import { styles } from './styles';
import { ButtonDefault } from '../../components/buttonDefault';

import LogoApp from '../../assets/logoPhoenix.png';
import LogoDobes from '../../assets/logoDobes.png';
import { COLORS } from '../../global';


function userValidate(userLogin, userPassword) {

   if (!(userLogin === '123456' && userPassword === '123456')) {
      return(
         alert('Dados de login estão errados!')
      );
   }

   return (
      alert('DEU BOM!')
   );
}

export function SignIn({ navigation }) {
   const [userLogin, setUserLogin] = useState('');
   const [userPassword, setUserPassword] = useState('');

   return (
      <ScrollView contentContainerStyle={styles.scrollView} >
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
               <View style={styles.contentForm} >
                  <TextInput
                     placeholder="CNPJ"
                     placeholderTextColor={COLORS.PLACEHOLDER}
                     style={styles.textInput}
                     keyboardType="number-pad"
                     onChangeText={setUserPassword}
                  />
                  <TextInput
                     placeholder="Senha"
                     placeholderTextColor={COLORS.PLACEHOLDER}
                     style={styles.textInput}
                     secureTextEntry
                     onChangeText={setUserLogin}
                  />
                  <Text
                     style={styles.textPress}
                     onPress={() => navigation.navigate('RecoveryPassword')}
                  >
                     Esqueci a minha senha
                  </Text>
                  <ButtonDefault 
                     title="Acessar" 
                     _onPress={() => userValidate(userLogin, userPassword)}
                  />
               </View>
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