import { View } from "react-native"
import Icons from "./Icons"
import Badge from "./Badge"

export default(props)=>{
    if(props.isBadge){
        return(
            <View>
                <Badge fontSize={10}>
                    <Icons 
                        name={props.iconName}
                        size={props.iconSize}
                        color={props.iconColor}
                    />
                </Badge>
            </View>
        )
    }

    return(
        <View>
            <Icons 
                name={props.iconName}
                size={props.iconSize}
                color={props.iconColor}
            />
        </View>
    )
    
}