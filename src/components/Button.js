import { Pressable } from "react-native";

export default (props) => {
  return (
    <Pressable
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      onPress={props.onPress}
      hitSlop={props.hitSlop ?? [0, 0, 0, 0]}
      style={{
        paddingHorizontal: props.paddingHorizontal,
        paddingVertical: props.paddingVertical,
      }}
    >
      {props.children}
    </Pressable>
  );
};
