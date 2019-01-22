import { StyleSheet, } from 'react-native';

const homeStyles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
   },

   myButton: {
      height: 60,
      width: 180,
      padding: 10,
      alignSelf: 'auto',
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "orange",
      borderRadius: 10,
   },
   btnText: {
      fontSize: 16,
      color:'white'
   }

});

export default homeStyles;
