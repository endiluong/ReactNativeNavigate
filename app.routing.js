import { createStackNavigator } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import DetailsScreen from "./components/DetailScreen";


// For Routing/ Navigating throught the App Components
const AppNavigator = createStackNavigator(
   {  
      //Set Component with pair value: [ keyName: Component Name]
      Home: HomeScreen,
      Details: DetailsScreen
   },
   {  // Set Entry page
      initialRouteName: "Home"
   }
);

export default AppNavigator