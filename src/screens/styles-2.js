import { StyleSheet } from "react-native";
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({

   safeArea: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
   },

   scrollView: {
      // backgroundColor: '#231F20',
      backgroundColor: theme.colors.backgroundApp,
   },

   mainView: {
      // backgroundColor: '#FF0000',
      backgroundColor: theme.colors.backgroundApp,
      flex: 1,
      flexDirection: 'column',
   },

      topImgView: {
         // backgroundColor: '#0013BA',
         backgroundColor: theme.colors.backgroundApp,
         flex: 2.5,
         minHeight: 170,
         alignItems: 'center',
         justifyContent: 'center'
      },

         logoApp: {
            marginVertical: 30
         },

      componentsView: {
         // backgroundColor: '#C4C800',
         backgroundColor: theme.colors.backgroundApp,
         flex: 4.5,
         minHeight: 250,
         alignItems: 'center',
         justifyContent: 'flex-start',
      },

         contentForm: {
            // backgroundColor: 'red',
            backgroundColor: theme.colors.backgroundApp,
            width: '80%',
            height: 300,
            alignItems: 'center',
            justifyContent: 'flex-start',
         },

            textInput: {
               borderWidth: 1,
               borderColor: theme.colors.inputBorder,
               borderRadius: 5,
               width: '90%',
               height: 40,
               maxWidth: 500,
               textAlign: 'center',
               marginTop: 20,
            },

            textPress: {
               color: theme.colors.text,
               textDecorationLine: 'underline',
               marginTop: 10,
               marginBottom: 60,
            },

            buttonSignIn: {
               // width: '90%',
            },

      bottomImgView: {
         // backgroundColor: '#00982B',
         backgroundColor: theme.colors.backgroundApp,
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         minHeight: 50
      },

         logoDobes: {
            width: 178,
            height: 31,
         }

})