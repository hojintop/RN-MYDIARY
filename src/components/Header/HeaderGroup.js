import { View } from "react-native"

export default(props)=>{
    return(
        <View style={{flex:1, flexDirection:"row"}}>
            {props.children}
        </View>
    )
}