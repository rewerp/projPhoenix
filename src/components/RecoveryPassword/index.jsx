import React, { setState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';

import { styles } from './styles';
import { ButtonDefault } from '../../components/buttonDefault';

import { COLORS } from '../../global';

export function RecoveryPassword({ navigation }) {
   return (
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
   )
}