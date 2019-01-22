
import { createAppContainer } from "react-navigation";
import AppNavigator from './app.routing';

const AppContainer = createAppContainer(AppNavigator);
export default createAppContainer(AppNavigator);
