import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({

   contentForm: {
      // backgroundColor: COLORS.BACKGROUNDAPP,
      backgroundColor: 'red',
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

});