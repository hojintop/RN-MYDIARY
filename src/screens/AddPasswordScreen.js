import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderGroup from "../components/Header/HeaderGroup";
import HeaderTitle from "../components/Header/HeaderTitle";
import Spacer from "../components/Spacer";
import { View } from "react-native";
import PasswordInputBox from "../components/PasswordInputBox";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { stateUserInfo } from "../states/stateUserInfo";
import database from "@react-native-firebase/database";

export default () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [isInputFirst, setIsInputFirst] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const [userInfo, setUserInfo] = useRecoilState(stateUserInfo);

  const navigation = useNavigation();

  function onPressBack() {
    navigation.goBack();
  }

  async function updatePassword() {
    const userDBRefKey = `users/${userInfo.uid}`;
    await database().ref(userDBRefKey).update({
      password: secondInput,
    });

    setUserInfo((prevState)=>{
      return{
        ...prevState,
        password:secondInput,
      }
    })
    onPressBack();
  }

  useEffect(() => {
    if (firstInput.length < 4) return;
    if (secondInput.length < 4) return;

    if (firstInput === secondInput) {
      // 저장하기
      updatePassword();
    }else{
      setErrorMessage("비밀번호가 틀립니다.");
      setSecondInput("");
    }
  }, [firstInput, secondInput]);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderGroup>
          <HeaderButton iconName="arrow-back" onPress={onPressBack} />
          <Spacer space={15} horizontal />
          <HeaderTitle title={userInfo.password !== ""? "비밀번호 수정" : "비밀번호 추가"} />
        </HeaderGroup>
      </Header>

      <View style={{ flex: 1, paddingTop: 30 }}>
        <PasswordInputBox
          value={isInputFirst ? firstInput : secondInput}
          onChangeText={(text) => {
            if (isInputFirst) {
              setFirstInput(text);
              if (text.length === 4) {
                setIsInputFirst(false);
              }
            } else {
              setSecondInput(text);
            }
          }}
          errorMessage={errorMessage}
        />
      </View>
    </View>
  );
};
