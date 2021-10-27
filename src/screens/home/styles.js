import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({

   scrollView: {
      flexGrow: 1,
      backgroundColor: COLORS.BACKGROUNDAPP,
   },

   mainView: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
   },

   logoApp: {
      marginBottom: 50,
   },

   textInfo: {
      color: COLORS.TEXT,
      fontWeight: 'bold',
      fontSize: 30,
   }

})