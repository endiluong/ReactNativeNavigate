import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import detailStyles from './DetailScreenStyle';

class DetailsScreen extends React.Component {
  // Option
  static navigationOptions = ({ navigation }) => ({
    // Receive title from the navigate Activity or can be mannualy setup :
    //  title: "Your Title Here",
    //
    title: `${navigation.state.params.title}`,
    //
    // Set The Back Button Color
    headerTintColor: "orange",
    //Edit Header Tittle
    headerTitleStyle: {
      color: "white",
      textAlign: "center",
      alignSelf: "center"
    },
    // Edit Header
    headerStyle: {
      backgroundColor: "black"
    }
  });
  // Detail Screen
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity
          style={detailStyles.myButton}
          onPress={() =>
            this.props.navigation.navigate("Details", { title: " Details" })
          }
        >
          <Text> Click me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text> Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DetailsScreen