import React, { setState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';

import { styles } from './styles';
import { ButtonDefault } from '../../components/buttonDefault';
import EnviarEmail from '../recovery/functions';

import LogoApp from '../../assets/logoPhoenix.png';
import LogoDobes from '../../assets/logoDobes.png';
import { COLORS } from '../../global';

export function RecoveryPassword({ navigation }) {
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
                  <Text style={styles.textInfo} >
                     Informe o login e clique em “Recuperar Senha”,
                     enviaremos um link para redefinir a sua senha no e-mail em seu cadastro.
                  </Text>
                  <TextInput
                     placeholder="CNPJ"
                     placeholderTextColor={COLORS.PLACEHOLDER}
                     style={styles.textInput}
                     keyboardType="number-pad"
                  />
                  <Text
                     style={styles.textPress}
                     onPress={() => navigation.navigate('SignIn')}
                  >
                     Voltar a tela de login
                  </Text>
                  <ButtonDefault
                     title="Recuperar Senha"
                     _onPress={() => navigation.navigate('ResendMailPassword')}
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