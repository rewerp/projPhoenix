import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../global";

export const styles = StyleSheet.create({

   mainView: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      flex: 1,
      flexDirection: 'column',
   },

   scrollView: {
      flexGrow: 1,
      backgroundColor: COLORS.BACKGROUNDAPP,
   },

   logoutView: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: 'red',
   },

   logoutButton: {
      backgroundColor: 'green',
      width: 60,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end',
   },

   textLogout: {
      color: COLORS.TEXT,
      fontFamily: FONTS.BOLD,
      fontSize: 22,
   },

   welcomeView: {
      flex: 8,
      backgroundColor: 'blue',
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