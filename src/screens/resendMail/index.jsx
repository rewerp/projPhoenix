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
import { ButtonDefault } from '../../components/buttonDefault';

import LogoApp from '../../assets/logoPhoenix.png';
import LogoDobes from '../../assets/logoDobes.png';
 
function ResendMailPassword({navigation}) {
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
               <View style={styles.viewInfo} >
                  <Text style={styles.textInfo} >
                     Um e-mail foi enviado para usuário@login.com.br
                  </Text>
                  <Text style={styles.textInfo} >  
                     Não recebeu o e-mail? 
                  </Text>
               </View>
               <View style={styles.spacebetween} />
               <View style={styles.content} >
                  <ButtonDefault 
                     style={styles.buttonAcessar} 
                     title="Reenviar e-mail" 
                     _onPress={() => alert('Teste de press do botão')} 
                  />
                  <Text 
                     style={styles.text} 
                     onPress={() => navigation.navigate('SignIn')}
                  >
                     Voltar para tela de login
                  </Text>
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

export default ResendMailPassword;