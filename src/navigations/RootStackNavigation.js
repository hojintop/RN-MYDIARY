import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DiaryStackNavigation from "./DiaryStackNavigation"
import AddDiaryScreen from "../screens/AddDiaryScreen"

const Stack = createNativeStackNavigator();

export default()=>{
    return(
        <Stack.Navigator initialRouteName="DiaryStack" screenOptions={{presentation: "containedModal", headerShown: false,}}>
            <Stack.Screen name="DiaryStack" component={DiaryStackNavigation}></Stack.Screen>
            <Stack.Screen name="AddDiary" component={AddDiaryScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}