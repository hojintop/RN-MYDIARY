import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header/Header";
import HeaderButton from "../components/Header/HeaderButton";
import HeaderTitle from "../components/Header/HeaderTitle";
import {
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useMemo, useState } from "react";
import { useImagePicker } from "../hooks/useImagePicker";
import RemoteImage from "../components/RemoteImage";
import Button from "../components/Button";
import Icons from "../components/Icons";
import Spacer from "../components/Spacer";
import Typography from "../components/Typography";
import DateTimeModalPicker from "react-native-modal-datetime-picker";
import SingleLineInput from "../components/SingleLineInput";
import MultiLineInput from "../components/MultiLineInput";
import { useCreateDiary } from "../hooks/useCreateDiary";

export default () => {
  const runCreateDiary = useCreateDiary();

  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const photoSize = useMemo(() => {
    return {
      photoWidth: width,
      photoHeigth: width * 0.5,
    };
  }, [width]);

  const [selectePhotoUrl, setSelectPhotourl] = useState(null);
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const canSave = useMemo(() => {
    if (selectedDate === null || title === "" || content === "") {
      return false;
    }

    return true;
  }, [selectedDate, title, content]);

  function onPressClose() {
    navigation.goBack();
  }

  async function onPressImagePicker() {
    const imageInfo = await useImagePicker(true);

    if (imageInfo !== null) {
      setSelectPhotourl(imageInfo[0].uri);
    }
  }

  function onPressDate() {
    setVisibleDatePicker(true);
  }

  function onCancelDatePicker() {
    setVisibleDatePicker(false);
  }

  function onConfirmDatePicker(date) {
    setSelectedDate(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    );
    setVisibleDatePicker(false);
  }

  function onPressAddDiary() {
    if(!canSave) return;
    runCreateDiary(selectePhotoUrl, selectedDate, title, content);
    navigation.goBack();
  }

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <HeaderTitle title="ADD DIARY"></HeaderTitle>
        <HeaderButton iconName="close" onPress={onPressClose} />
      </Header>

      <ScrollView
        style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }}
      >
        <Button onPress={onPressImagePicker}>
          {selectePhotoUrl !== null ? (
            <RemoteImage
              url={selectePhotoUrl}
              width={photoSize.photoWidth - 20}
              height={photoSize.photoHeigth}
              style={{ borderRadius: photoSize.photoHeigth * 0.1 }}
            />
          ) : (
            <View
              style={{
                backgroundColor: "gray",
                width: photoSize.photoWidth - 20,
                height: photoSize.photoHeigth,
                borderRadius: photoSize.photoHeigth * 0.1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icons name="add" size={40} color="white"></Icons>
            </View>
          )}
        </Button>

        <Spacer space={10} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Typography fontSize={20}>날짜</Typography>
          <Button onPress={onPressDate}>
            {selectedDate !== null ? (
              <Typography fontSize={20} color="blue">
                {selectedDate}
              </Typography>
            ) : (
              <View style={{ flexDirection: "row" }}>
                <Typography fontSize={20} color="gray">
                  날짜를 선택해 주세요
                </Typography>
                <Spacer space={10} horizontal />
                <Icons name="calendar-outline" size={23} />
              </View>
            )}
          </Button>
        </View>

        <Spacer space={15} />

        <SingleLineInput
          placeholder="제목을 입력해 주세요."
          onChangeText={setTitle}
        ></SingleLineInput>

        <Spacer space={15} />

        <MultiLineInput
          placeholder="내용을 입력해 주세요."
          onChangeText={setContent}
        ></MultiLineInput>

        <DateTimeModalPicker
          isVisible={visibleDatePicker}
          mode="date"
          onCancel={onCancelDatePicker}
          onConfirm={onConfirmDatePicker}
        />

        <View
          style={{
            backgroundColor: canSave ? "lightgreen" : "lightgray",
            paddingVertical: 10,
            marginTop: 35,
          }}
        >
          <Button onPress={onPressAddDiary}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Typography fontSize={25} color={canSave ? "black" : "gray"}>
                등록하기
              </Typography>
            </View>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};
