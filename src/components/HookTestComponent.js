import { useMemo } from "react"
import { Text, View } from "react-native"
import Typography from "./Typography";

export default(props)=>{
    const tempVal = useMemo(()=>{
        return props.a + props.b;
    },[props.a,props.b])

    return(
        
            <Text>{tempVal}</Text>
        
    )
}