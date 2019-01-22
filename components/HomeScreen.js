import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import homeStyles from './HomeScreenStyle';

class HomeScreen extends React.Component {
   // Option
   static navigationOptions = ({ navigation }) => ({
      // Receive title from the navigate Activity or can be mannualy setup :
      //
      title: 'Home',
      //Edit Header Tittle
      headerTitleStyle: {
         color: 'white',
         textAlign: "center",
         alignSelf: "center"
      },
      // Edit Header
      headerStyle: {
         backgroundColor: "black"
      }
   });
   //Home Screen
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={homeStyles.myButton}
          onPress={() =>
            this.props.navigation.navigate("Details", { title: " Details" })
          }
        >
             <Text style={homeStyles.btnText}> Click to Details</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen