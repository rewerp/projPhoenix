import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { styles } from './styles';

import LogoApp from '../../assets/logoPhoenix.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Home({ navigation }) {
   return (
      <View style={styles.mainView} >
         <ScrollView contentContainerStyle={styles.scrollView} >
            <View style={styles.logoutView} >
               <TouchableOpacity style={styles.logoutButton} >
                  <Text style={styles.textLogout} >
                     Sair
                  </Text>
               </TouchableOpacity>
            </View>
            <View style={styles.welcomeView} >
               <Image
                  source={LogoApp}
                  style={styles.logoApp}
               />
               <Text style={styles.textInfo} >
                  Bem vindo!
               </Text>
            </View>
         </ScrollView>
      </View>
   )
}