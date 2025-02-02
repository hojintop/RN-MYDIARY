import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderTitle from "../components/Header/HeaderTitle";
import { View } from "react-native";
import Button from "../components/Button";
import Icons from "../components/Icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  function onPressSetting() {
    navigation.navigate("Setting");
  }

  function onPressAddButton(){
    navigation.navigate("AddDiary");
  }
  
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderTitle title="DIARY LIST" />
        <HeaderButton iconName="settings-outline" onPress={onPressSetting} />
      </Header>

      <View
        style={{
          position: "absolute",
          bottom: insets.bottom + 24,
          right: 12,
          backgroundColor: "purple",
          borderRadius: 25,
          width: 50,
          height: 50,
          borderColor: "gray",
          borderWidth: 0.3
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button onPress={onPressAddButton}>
            <Icons name="add" size={20} color="white"></Icons>
          </Button>
        </View>
      </View>
    </View>
  );
};
