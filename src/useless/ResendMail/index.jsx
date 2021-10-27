import React, { setState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';

import { styles } from './styles';
import { ButtonDefault } from '../../components/buttonDefault';

export function ResendMailPassword({ navigation }) {
   return (
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
   )
}