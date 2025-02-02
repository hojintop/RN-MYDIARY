import { View } from "react-native"
import Typography from "./components/Typography"
import { useEffect } from "react"

export default(props)=>{

    useEffect(()=>{
        setTimeout(() => {
            props.onFinishLoad();
        }, 1000);
    },[])

    return(
        <View style={{flex:1 , justifyContent: "center", alignItems: "center", }}>
            <Typography fontSize={26}>SPLASH</Typography>
        </View>
    )
}