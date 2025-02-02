import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header/Header"
import HeaderButton from "../components/Header/HeaderButton"
import HeaderGroup from "../components/Header/HeaderGroup"
import HeaderTitle from "../components/Header/HeaderTitle"

export default()=>{
    const navigation = useNavigation();

    function onPressBack(){
        navigation.goBack();
    }
    return(
        <Header>
            <HeaderGroup>
                <HeaderButton iconName="arrow-back" onPress={onPressBack}/>
                <HeaderTitle title="SETTING" />
            </HeaderGroup>
        </Header>
    )
}