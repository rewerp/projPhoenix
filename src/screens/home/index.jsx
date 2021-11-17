import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { styles } from './styles';

import LogoImage from '../../assets/logoImage.png';
import LogoName from '../../assets/logoName.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Home({ navigation }) {
   return (
      <View style={styles.mainView} >
         <SafeAreaView style={styles.scrollView} >
         {/* <ScrollView contentContainerStyle={styles.scrollView} > */}
            <View style={styles.logoutView} >
               <TouchableOpacity 
                  style={styles.logoutButton}
                  onPress={() => navigation.navigate('SignIn')} 
               >
                  <Text style={styles.textLogout} >
                     Sair
                  </Text>
               </TouchableOpacity>
            </View>
            <View style={styles.welcomeView} >
            <Image
                  style={styles.logoImage}
                  source={LogoImage}
               />
               <Image
                  style={styles.logoName}
                  source={LogoName}
               />
               <Text style={styles.textInfo} >
                  Bem vindo!
               </Text>
            </View>
         {/* </ScrollView> */}
         </SafeAreaView>
      </View>
   )
}