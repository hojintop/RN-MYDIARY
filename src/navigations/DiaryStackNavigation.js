import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiaryListScreen from "../screens/DiaryListScreen";
import SettingScreen from "../screens/SettingScreen";
import DiaryDetailScreen from "../screens/DiaryDetailScreen"
import AddPasswordScreen from "../screens/AddPasswordScreen";

export default()=>{
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator
            initialRouteName="DiaryList"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="DiaryList" component={DiaryListScreen} />
            <Stack.Screen name="DiaryDetail" component={DiaryDetailScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />

            <Stack.Screen name="AddPassword" component={AddPasswordScreen} />
        </Stack.Navigator>
    )
}