import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DiaryListScreen from "./screens/DiaryListScreen";
import SettingScreen from "./screens/SettingScreen"
import RootStackNavigation from "./navigations/RootStackNavigation";

export default()=>{
    return(
        <NavigationContainer>
            <RootStackNavigation />
        </NavigationContainer>
    )
}