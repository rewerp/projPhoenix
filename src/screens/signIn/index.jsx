import React, { setState } from 'react';
import { 
   View, 
   ScrollView,
   Text, 
   Image, 
   StatusBar, 
   TextInput,  
   SafeAreaView,
   TouchableOpacity, 
   Linking
} from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/theme';
import { ButtonDefault } from '../../components/button';

import LogoApp from '../../assets/logoPhoenix.png';
import LogoDobes from '../../assets/logoDobes.png';
 
function SignIn() {
   return(
      <SafeAreaView style={styles.main}  >
         <ScrollView style={styles.scrollView} contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}} >
            <View style={styles.container} >
               <StatusBar 
                  barStyle="light-content"
                  backgroundColor="transparent"
                  translucent   
               />
               <Image 
                  style={styles.logoapp}
                  source={LogoApp} 
               />
               <View style={styles.content} >
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
                  <Text style={styles.text} >Esqueci a minha senha</Text>   
                  <View style={styles.spacebetween} />
                  <ButtonDefault style={styles.buttonAcessar} title="Acessar" _onPress={() => alert('Teste de press do botão')} />
               </View>
               <View>
                  <TouchableOpacity onPress={() => Linking.openURL('https://dobesone.com.br/')} >
                  <Image 
                     style={styles.logodobes} 
                     source={LogoDobes} 
                  />
                  </TouchableOpacity>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}

export default SignIn;