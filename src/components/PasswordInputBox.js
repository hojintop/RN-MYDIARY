import { TextInput, View } from "react-native";
import Typography from "./Typography";
import Spacer from "./Spacer";

export default (props) => {
  return (
    <>
      <View style={{ flexDirection: "row", paddingHorizontal: 24 }}>
        {/* input autoFocus & hidden */}

        <TextInput
          autoFocus
          value={props.value}
          onChangeText={props.onChangeText}
          caretHidden
          keyboardType="number-pad"
          maxLength={4}
          style={{ width: 20, height: 20, opacity: 0, position: "absolute" }}
        />

        {[0, 1, 2, 3].map((item) => {
          return (
            <View
              key={item}
              style={{
                flex: 1,
                height: 100,
                borderBottomWidth: 2,
                borderColor: props.errorMessage ? "red" : "black",
                justifyContent: "center",
                alignItems: "center",
                marginRight: item !== 3 ? 12 : 0,
              }}
            >
              {props.value.length > item && (
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 8,
                    backgroundColor: props.errorMessage ? "red" : "purple",
                  }}
                ></View>
              )}
            </View>
          );
        })}
      </View>

      {props.errorMessage && (
        <View style={{paddingHorizontal: 24}}>
          <Spacer space={12} />
          <Typography fontSize={15} color="red">{props.errorMessage}</Typography>
        </View>
      )}
    </>
  );
};
