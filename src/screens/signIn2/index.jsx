import React, { setState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, SafeAreaView,
   TouchableOpacity, Linking
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/theme';
import { ButtonDefault } from '../../components/buttonDefault';

import LogoApp from '../../assets/logoPhoenix.png';
import LogoDobes from '../../assets/logoDobes.png';

function SignIn2({ navigation }) {
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
               <View style={styles.contentForm} >
                  <TextInput
                     placeholder="CNPJ"
                     placeholderTextColor={theme.colors.placeholderTextColor}
                     style={styles.textInput}
                     keyboardType="number-pad"
                  />
                  <TextInput
                     placeholder="Senha"
                     placeholderTextColor={theme.colors.placeholderTextColor}
                     style={styles.textInput}
                     secureTextEntry
                  />
                  <Text
                     style={styles.textPress}
                     onPress={() => navigation.navigate('RecoveryPassword')}
                  >
                     Esqueci a minha senha
                  </Text>
                  <ButtonDefault style={styles.buttonSignIn} title="Acessar" />
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

export default SignIn2;