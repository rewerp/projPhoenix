import React, { setState } from 'react';
import {
   View, ScrollView, Text, Image,
   StatusBar, TextInput, TouchableOpacity,
   Linking
} from 'react-native';

import { styles } from './styles';
import { ButtonDefault } from '../../components/buttonDefault';

import { COLORS } from '../../global';

export function UserLogin({ navigation }) {
   return (
      <View style={styles.contentForm} >
         <TextInput
            placeholder="CNPJ"
            placeholderTextColor={COLORS.PLACEHOLDER}
            style={styles.textInput}
            keyboardType="number-pad"
         />
         <TextInput
            placeholder="Senha"
            placeholderTextColor={COLORS.PLACEHOLDER}
            style={styles.textInput}
            secureTextEntry
         />
         <Text
            style={styles.textPress}
            onPress={() => navigation.navigate('RecoveryPassword')}
         >
            Esqueci a minha senha
         </Text>
         <ButtonDefault title="Acessar" />
      </View>
   )
}