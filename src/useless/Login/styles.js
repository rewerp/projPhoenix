import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({

   scrollView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
   },

   mainView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 1,
      flexDirection: 'column',
   },

   topImgView: {
      // backgroundColor: COLORS.BACKGROUNDAPP,
      backgroundColor: 'yellow',
      flex: 1.5,
      minHeight: 170,
      alignItems: 'center',
      justifyContent: 'flex-end',
   },

   logoApp: {
      // marginVertical: 30
   },

   componentsView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 5,
      minHeight: 250,
      alignItems: 'center',
      justifyContent: 'center',
   },

   contentForm: {
      // backgroundColor: COLORS.BACKGROUNDAPP,
      backgroundColor: 'red',
      width: '80%',
      alignItems: 'center',
   },

   textInput: {
      borderWidth: 1,
      borderColor: COLORS.INPUTBORDER,
      borderRadius: 5,
      width: '90%',
      height: 40,
      maxWidth: 500,
      textAlign: 'center',
      marginBottom: 20,
   },

   textPress: {
      color: COLORS.TEXT,
      textDecorationLine: 'underline',
      marginBottom: 50,
   },

   bottomImgView: {
      // backgroundColor: COLORS.BACKGROUNDAPP,
      backgroundColor: 'blue',
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: 50
   },

   logoDobes: {
      width: 178,
      height: 31,
   }

})