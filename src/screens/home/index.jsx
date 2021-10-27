import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { styles } from './styles';

import LogoApp from '../../assets/logoPhoenix.png';

export function Home({ navigation }) {
   return (
      <ScrollView contentContainerStyle={styles.scrollView} >
         <View style={styles.mainView} >
            <Image 
               source={LogoApp} 
               style={styles.logoApp}
            />
            <Text style={styles.textInfo} >
               Bem vindo!
            </Text>
         </View>
      </ScrollView>
   )
}