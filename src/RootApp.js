import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DiaryListScreen from "./screens/DiaryListScreen";
import SettingScreen from "./screens/SettingScreen"
import RootStackNavigation from "./navigations/RootStackNavigation";
import { useState } from "react";
import SplashView from "./SplashView";

export default()=>{
    const [initialized, setInitialized] = useState(false);

    if(!initialized){
        return(
            <SplashView 
                onFinishLoad={()=>setInitialized(true)}
            />
        )
    }

    return(
        <NavigationContainer>
            <RootStackNavigation />
        </NavigationContainer>
    )
}