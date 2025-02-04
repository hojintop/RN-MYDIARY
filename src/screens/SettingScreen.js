import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderGroup from "../components/Header/HeaderGroup";
import HeaderTitle from "../components/Header/HeaderTitle";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { stateUserInfo } from "../states/stateUserInfo";
import { View } from "react-native";
import RemoteImage from "../components/RemoteImage";
import Typography from "../components/Typography";
import Spacer from "../components/Spacer";
import Icons from "../components/Icons";
import Button from "../components/Button";
import { useImagePicker } from "../hooks/useImagePicker";

export default () => {
  const navigation = useNavigation();
  //   const userInfo = useRecoilValue(stateUserInfo);
  const [userInfo, setUserInfo] = useRecoilState(stateUserInfo);

  function onPressBack() {
    navigation.goBack();
  }

  async function onPressImageUpdate() {
    const pickFileInfo = await useImagePicker(true);
    // console.log(pickFileInfo);
    console.log(pickFileInfo[0]);
    setUserInfo((prevState)=>{
        return{
            ...prevState,
            profileImage:pickFileInfo[0].uri
        }
    })
  }
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderGroup>
          <HeaderButton iconName="arrow-back" onPress={onPressBack} />
          <Spacer space={15} horizontal />
          <HeaderTitle title="SETTING" />
        </HeaderGroup>
      </Header>

      <View style={{ flex: 1, alignItems: "center", paddingTop: 15 }}>
        <View>
          <RemoteImage
            url={userInfo.profileImage}
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
          />
          <View
            style={{ position: "absolute", zIndex: 1, right: 5, bottom: -5 }}
          >
            <Button onPress={onPressImageUpdate}>
              <Icons name="camera" size={25} color="gray"/>
            </Button>
          </View>
        </View>

        <Spacer space={10} />
        <Typography fontSize={25}>{userInfo.name}</Typography>
      </View>
    </View>
  );
};
