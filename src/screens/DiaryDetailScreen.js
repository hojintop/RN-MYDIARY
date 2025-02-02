import { useNavigation } from "@react-navigation/native"
import Header from "../components/Header/Header"
import HeaderButton from "../components/Header/HeaderButton"
import HeaderTitle from "../components/Header/HeaderTitle"

export default()=>{
    const navigation = useNavigation();

    function onPressClose(){
        navigation.goBack();
    }
    return(
        <Header>
            <HeaderTitle title="DIARY DETAIL" />
            <HeaderButton iconName="close" onPress={onPressClose} />
        </Header>
    )
}