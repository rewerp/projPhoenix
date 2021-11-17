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
      flex: 0.5,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      backgroundColor: COLORS.BACKGROUNDAPP,
      // backgroundColor: 'red',
   },

   logoutButton: {
      backgroundColor: COLORS.BACKGROUNDAPP,
      // backgroundColor: 'green',
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
      backgroundColor: COLORS.BACKGROUNDAPP,
      // backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
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

   textInfo: {
      color: COLORS.TEXT,
      fontWeight: 'bold',
      fontSize: 30,
      marginTop: 100,
   }

})