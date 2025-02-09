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
import Dvider from "../components/Dvider";

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
    setUserInfo((prevState) => {
      return {
        ...prevState,
        profileImage: pickFileInfo[0].uri,
      };
    });

    // TO-DO....
    // storage 에서 만약 이미지 url 정보를 받아 왔따면 database 의 내 profile 정보의 이미지 데이터update 할것..useImagePicker 에서 storage 관련 이슈 기재함
  }

  function onPressAddPassword(){
    navigation.navigate("AddPassword");
  }

  function onPressResetPassword(){

  }

  return (
    <View style={{ flex: 1, }}>
      <Header>
        <HeaderGroup>
          <HeaderButton iconName="arrow-back" onPress={onPressBack} />
          <Spacer space={15} horizontal />
          <HeaderTitle title="SETTING" />
        </HeaderGroup>
      </Header>

      <View style={{alignItems: "center", paddingTop: 15 }}>
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
              <Icons name="camera" size={25} color="gray" />
            </Button>
          </View>
        </View>

        <Spacer space={10} />
        <Typography fontSize={25}>{userInfo.name}</Typography>
      </View>

      <Spacer space={20} />
      <Dvider />
      <Spacer space={20} />
      
      <Button onPress={onPressAddPassword}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,paddingVertical: 10, paddingHorizontal: 10}}>
            <Typography fontSize={20}>비밀번호 추가</Typography>
            <Icons name="chevron-forward-sharp" size={20}></Icons>
        </View>
      </Button>

      <Button onPress={onPressResetPassword}>
        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center" ,paddingVertical: 10, paddingHorizontal: 10}}>
            <Typography fontSize={20}>비밀번호 초기화</Typography>
        </View>
      </Button>
    </View>
  );
};
