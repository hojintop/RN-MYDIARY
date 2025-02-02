import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header/Header"
import HeaderButton from "../components/Header/HeaderButton"
import HeaderTitle from "../components/Header/HeaderTitle"

export default()=>{
    const navigation = useNavigation();

    function onPressSetting(){
        navigation.navigate("Setting");
    }
    
    return(
        <Header>
            <HeaderTitle title="DIARY LIST" />
            <HeaderButton iconName="settings-outline" onPress={onPressSetting} />
        </Header>
    )
}