import { Dimensions, View } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Spacer from "../Spacer";
import HeaderTitle from "./HeaderTitle";
import HeaderButton from "./HeaderButton";

const width = Dimensions.get("window");
export default (props) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width: width,
              flexDirection: "row",
              height: 58,
              borderBottomColor: "grey",
              borderBottomWidth: 0.5,
              alignItems: "center",
            }}
          >
            <Spacer horizontal={true} space={12} />

            <View style={{ flex: 1, flexDirection:"row", justifyContent: "space-between"}}>
                {props.children}
            </View>

            <Spacer horizontal={true} space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
};
