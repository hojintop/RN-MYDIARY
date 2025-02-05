import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderTitle from "../components/Header/HeaderTitle";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { useMemo } from "react";
import Button from "../components/Button";
import RemoteImage from "../components/RemoteImage";
import Typography from "../components/Typography";
import Spacer from "../components/Spacer";

export default () => {
  const { width } = useWindowDimensions();
  const route = useRoute();

  const navigation = useNavigation();

  const photoSize = useMemo(() => {
    return {
      photoWidth: width,
      photoHeight: width * 0.5,
    };
  }, [width]);

  function onPressClose() {
    navigation.goBack();
  }
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderTitle title="DIARY DETAIL" />
        <HeaderButton iconName="close" onPress={onPressClose} />
      </Header>

      <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
        {typeof route.params.photoUrl !== "undefined" &&
        route.params.photoUrl !== null ? (
          <View
            style={{
              paddingTop: 10,
            }}
          >
            <Button>
              <RemoteImage
                url={route.params.photoUrl}
                width={photoSize.photoWidth - 20}
                height={photoSize.photoHeight}
                style={{
                  borderRadius: photoSize.photoHeight * 0.1,
                  borderWidth: 0.5,
                  borderColor: "darkgray",
                  borderBottomWidth: 4, // 하단 경계선
                  shadowColor: "lightgray", // 그림자 색상
                }}
              />
            </Button>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Typography fontSize={25}>이미지가 없습니다.</Typography>
          </View>
        )}

        <Spacer space={10} />

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize={25}>{route.params.title}</Typography>
          <Typography fontSize={20}>{route.params.date}</Typography>
        </View>

        <Spacer space={10} />

        <Typography fontSize={20}>{route.params.content}</Typography>
      </ScrollView>
    </View>
  );
};
