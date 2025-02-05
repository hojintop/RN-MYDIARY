import database from "@react-native-firebase/database";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { stateUserInfo } from "../states/stateUserInfo";
import { stateDiaryList } from "../states/stateDiaryList";
import { useCallback } from "react";

export const useCreateDiary = () => {
  const userInfo = useRecoilValue(stateUserInfo);
  const setDiaryList = useSetRecoilState(stateDiaryList);

  return useCallback(async (photoUrl, date, title, content) => {
    try {
      if (date === null) return;

      if (content === "") return;

      if (title === "") return;

      const now = new Date().toISOString();

      const userDiaryDB = database().ref(`diary/${userInfo.uid}`).push();

      const saveItem = {
        photoUrl,
        title,
        content,
        date: date,
        createAt: now,
        updateAt: now,
      };

      await userDiaryDB.set(saveItem);

      // DB 저장 후 리코일 상태 업데이트
      setDiaryList((prevList) => [
        ...prevList, // 기존 리스트를 복사
        saveItem,    // 새로운 항목 추가
      ]);
      
    } catch (ex) {}
  }, []);
};
