import { StyleSheet } from "react-native";
import { theme } from '../../global/theme'

export const styles = StyleSheet.create({
   main: {
      flex: 1,
      backgroundColor: theme.colors.backgroundApp,
   },

   scrollView: {
      backgroundColor: theme.colors.backgroundApp,
   },

   container: {
      maxWidth: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.backgroundApp,
      paddingVertical: 20
   },

   logoapp: {
      width: 119,
      height: 147,
      marginBottom: 20
   },

   content: {
      width: '100%',
      maxWidth: 300,
      paddingHorizontal: 20,
      alignItems: 'center',
   },

   logodobes: {
      marginTop: 90,
      width: 140,
      height: 24
   },

   viewInfo: {
      marginHorizontal: 50,
      justifyContent: 'center',
      alignItems: 'center',
   },

   text: {
      color: theme.colors.text,
      marginTop: 10,
      textDecorationLine: 'underline'
   },

   textInfo: {
      color: theme.colors.text,
      fontWeight: 'bold',
      marginTop: 30,
      textAlign: 'center',
   },

   textInput: {
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      color: theme.colors.textInputs,

      borderWidth: 1,
      borderColor: theme.colors.inputBorder,
      borderRadius: 5,

      width: '100%',
      height: 40,
      textAlign: 'center',
      marginTop: 30
   },

   spacebetween: {
      marginTop: 30,
   }
});