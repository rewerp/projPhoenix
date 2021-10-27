import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({

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

})