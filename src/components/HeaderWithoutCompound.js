import { Dimensions, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Spacer from "./Spacer";
import Button from "./Button";
import Icons from "./Icons";
import Typography from "./Typography";

const width = Dimensions.get("window");

export default (props) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => (
        <View style={{paddingTop: insets.top,}}>
            <View
            style={{
                width: width,
                height: 56,
                flexDirection: "row",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
            }}
            >
                <Spacer horizontal={true} space={12} />

                <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    {props.leftIcon && (
                        <Button onPress={props.leftIcon.onPress}>
                            <Icons name={props.leftIcon.iconName} size={28} />
                        </Button>
                    )}

                    <Typography fontSize={18}>{props.title}</Typography>

                    {props.rightIcon && (
                        <Button onPress={props.rightIcon.onPress}>
                            <Icons name={props.rightIcon.iconName} size={28} />
                        </Button>
                    )}
                </View>

                <Spacer horizontal={true} space={12} />
            </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};
