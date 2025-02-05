import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderTitle from "../components/Header/HeaderTitle";
import { FlatList, useWindowDimensions, View } from "react-native";
import Button from "../components/Button";
import Icons from "../components/Icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import Typography from "../components/Typography";
import RemoteImage from "../components/RemoteImage";
import { stateDiaryList } from "../states/stateDiaryList";
import { useRecoilValue } from "recoil";
import { useGetDiaryList } from "../hooks/useGetDiaryList";

export default () => {
  const data = useRecoilValue(stateDiaryList);

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  function onPressSetting() {
    navigation.navigate("Setting");
  }

  function onPressAddButton() {
    navigation.navigate("AddDiary");
  }

  //   const [data, setData] = useState([
  //     {
  //       id: 0,
  //       title: "TITLE-01",
  //       content: "CONTENT-01",
  //       createAt: "2025-02-03",
  //       updateAt: "2025-02-03",
  //       imageUrl:
  //         "https://docs.expo.dev/static/images/tutorial/background-image.png",
  //     },
  //     {
  //       id: 1,
  //       title: "TITLE-02",
  //       content: "CONTENT-02",
  //       createAt: "2025-02-03",
  //       updateAt: "2025-02-03",
  //       imageUrl:
  //         "https://docs.expo.dev/static/images/tutorial/background-image.png",
  //     },
  //     {
  //       id: 2,
  //       title: "TITLE-03",
  //       content: "CONTENT-03",
  //       createAt: "2025-02-03",
  //       updateAt: "2025-02-03",
  //     },
  //   ]);

  function onPressItem(item){
    navigation.navigate("DiaryDetail",item);
  }
  
  function renderItem({ item }) {
    return (
      <Button onPress={()=>onPressItem(item)}>
        <View style={{ flex: 1 }} key={`diary_${item.id}`}>
          <View style={{ flex: 1, paddingVertical: 12 }}>
            {item.photoUrl !== null && item.photoUrl !== undefined ? (
              <RemoteImage
                url={item.photoUrl}
                width={width - 24 * 2}
                height={(width - 24 * 2) * 0.5}
                style={{
                  borderRadius: 10,
                  borderWidth: 0.5,
                  borderColor: "darkgray",
                  borderBottomWidth: 4, // 하단 경계선
                  shadowColor: "lightgray", // 그림자 색상
                }}
              ></RemoteImage>
            ) : (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Typography fontSize={18} color="gray">
                  이미지가 없습니다.
                </Typography>
              </View>
            )}
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Typography fontSize={20}>{item.title}</Typography>
              <Typography fontSize={15}>{item.date}</Typography>
            </View>
            <Typography fontSize={15} color="gray">
              {item.content}
            </Typography>
          </View>
        </View>
      </Button>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderTitle title="DIARY LIST" />
        <HeaderButton iconName="settings-outline" onPress={onPressSetting} />
      </Header>

      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 24 }}
        />
      </View>
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
          borderWidth: 0.3,
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
