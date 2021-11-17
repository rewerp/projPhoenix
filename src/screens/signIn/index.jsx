import React, { setState, useRef, useState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { styles } from './styles';
import { COLORS } from '../../global';
import { ButtonDefault } from '../../components/buttonDefault';

import LogoImage from '../../assets/logoImage.png';
import LogoName from '../../assets/logoName.png';
import LogoDobes from '../../assets/logoDobes.png';


function userValidate(userLogin, userPassword) {
   return (
      (userLogin === '00000000000000' && userPassword === '')
   )
}

export function SignIn({ navigation }) {
   const [userLogin, setUserLogin] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const [cnpj, setCnpj] = useState('');
   const cnpjRef = useRef(null);


   function extractCnpj() {
      const userLogin = cnpjRef?.current.getRawValue();
      const cnpjValid = cnpjRef?.current.isValid();

      return (userLogin);
   }

   return (
      <View style={styles.mainView} >
         <ScrollView contentContainerStyle={styles.scrollView} >
            <View style={styles.topImgView} >
               <StatusBar
                  barStyle="light-content"
                  backgroundColor="transparent"
                  translucent
               />
               <Image
                  style={styles.logoImage}
                  source={LogoImage}
               />
               <Image
                  style={styles.logoName}
                  source={LogoName}
               />
            </View>
            <View style={styles.componentsView} >
               <View style={styles.contentForm} >
                  <TextInputMask
                     style={styles.textInput}
                     placeholder="CNPJ"
                     placeholderTextColor={COLORS.PLACEHOLDER}
                     clearButtonMode="while-editing"
                     type={'cnpj'}
                     options={{
                        format: '99.999.999/9999-99'
                     }}
                     value={cnpj}
                     onChangeText={text => setCnpj(text)}
                     ref={cnpjRef}
                  />
                  {/* <TextInput
                     placeholder="CNPJ"
                     placeholderTextColor={COLORS.PLACEHOLDER}
                     style={styles.textInput}
                     keyboardType="number-pad"
                     onChangeText={setUserPassword}
                  /> */}
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
                     _onPress={() => userValidate(extractCnpj(), userPassword) ? navigation.navigate('Home') : (alert('Dados de login estão errados!'))}
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
         </ScrollView>
      </View>
   )
}