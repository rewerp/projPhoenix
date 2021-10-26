import React, { setState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';

import { styles } from './styles';
import { ButtonDefault } from '../../components/buttonDefault';

import LogoApp from '../../assets/logoPhoenix.png';
import LogoDobes from '../../assets/logoDobes.png';

export function ResendMailPassword({ navigation }) {
   return (
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollView} >
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
                  <View style={styles.infoView} >
                     <Text style={styles.textInfo} >
                        Um e-mail foi enviado para usuário@login.com.br
                     </Text>
                     <Text style={styles.textInfo} >
                        Não recebeu o e-mail?
                     </Text>
                  </View>
                  <ButtonDefault
                     title="Reenviar e-mail"
                     _onPress={() => alert('Teste de press do botão')}
                  />
                  <Text
                     style={styles.textPress}
                     onPress={() => navigation.navigate('SignIn')}
                  >
                     Voltar para tela de login
                  </Text>
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