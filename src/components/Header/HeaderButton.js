import { View } from "react-native"
import Button from "../Button"
import Icons from "../Icons"

export default(props)=>{
    return(
        <Button onPress={props.onPress}>
            <Icons name={props.iconName} size={24} color={props.color}/>
        </Button>
    )
}