import { useCallback } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { stateDiaryList } from "../states/stateDiaryList"
import { stateUserInfo } from "../states/stateUserInfo";
import database from "@react-native-firebase/database";

export const useGetDiaryList = ()=>{
    const setDiaryList = useSetRecoilState(stateDiaryList);
    const userInfo = useRecoilValue(stateUserInfo);
    
    return useCallback(async(userInfo)=>{
        const userDiaryDB = database().ref(`diary/${userInfo.uid}`);

        const diaryListResult = await userDiaryDB.once("value").then((snapshot)=>{
            return snapshot.val();
        })

        const resultList = Object.keys(diaryListResult).map((key)=>diaryListResult[key]);
        
        setDiaryList(resultList);
    },[])
}