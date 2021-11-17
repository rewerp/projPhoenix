import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({

   mainView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 1,
      flexDirection: 'column',
   },
   
   scrollView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flexGrow: 1
   },
   
   topImgView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 1.5,
      minHeight: 170,
      alignItems: 'center',
      justifyContent: 'flex-end',
   },

   logoImage: {
      marginTop: 20,
      height: 120,
      width: 120,
   },

   logoName: {
      marginTop: 10,
      height: 24.04,
      width: 120,
   },

   componentsView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 3,
      minHeight: 250,
      alignItems: 'center',
      justifyContent: 'center',
   },

   contentForm: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      height: '100%',
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
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