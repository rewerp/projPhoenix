import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({
   container: {
      backgroundColor: COLORS.BUTTON,
      width: '90%',
      maxWidth: 500,
      height: 40,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
   },

   text: {
      color: COLORS.TEXT,
      fontSize: 18,
      fontWeight: 'bold' 
   }

})