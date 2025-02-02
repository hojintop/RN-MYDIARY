import { View } from "react-native"

export default(props)=>{
    if(props.horizontal){
        return(
            <View style={{ marginLeft: props.space }} />
        )
    }else{
        return(
            <View style={{ marginTop: props.space }} />
        )
    }
}