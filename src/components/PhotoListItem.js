import { Animated, useWindowDimensions, View } from "react-native";
import RemoteImage from "./RemoteImage";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default (props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [animValue] = useState(new Animated.Value(0));

  function onPressItem() {
    navigation.navigate("ImageDetail", { url: props.url });
  }

  function onPressIn() {
    Animated.timing(animValue,{
        duration:200,
        toValue:1,
        useNativeDriver: true,
    }).start();
  }
  
  function onPressOut() {
    Animated.timing(animValue,{
        duration:200,
        toValue:0,
        useNativeDriver: true,
    }).start();
  }

  const scale = animValue.interpolate({
    inputRange:[0, 1],
    outputRange:[1.0, 0.95],
  })

  return (
    <Button
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPressItem}
      paddingVertical={20}
      paddingHorizontal={10}
    >
    <Animated.View style={{transform:[{scale:scale}]}}>
        <RemoteImage 
            style={{
                transform: [
                    {scale:1}
                ]
            }}
            url={props.url} width={width-20} height={width * 1.2} />
    </Animated.View>
    </Button>
  );
};
