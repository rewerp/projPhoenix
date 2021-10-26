import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({

   scrollView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flexGrow: 1
   },

   mainView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 1,
      flexDirection: 'column',
   },

   topImgView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 1.5,
      minHeight: 170,
      alignItems: 'center',
      justifyContent: 'flex-end'
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
      backgroundColor: COLORS.BACKGROUNDAPP,
      width: '80%',
      alignItems: 'center',
   },

   infoView: {
      marginBottom: 20,
   },

   textInfo: {
      color: COLORS.TEXT,
      fontWeight: 'bold',
      fontSize: 13,
      textAlign: 'center',
      marginBottom: 20,
   },

   textPress: {
      color: COLORS.TEXT,
      textDecorationLine: 'underline',
      marginTop: 20,
   },

   bottomImgView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: 50
   },

   logoDobes: {
      width: 178,
      height: 31,
   }

});