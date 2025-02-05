import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";

export async function useImagePicker(allowsEditing){
    try{
        const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "images",
            allowsEditing,
        })
    
        if(imagePickerResult.canceled) return null;
    
        const pikPhotoResultArray = imagePickerResult.assets.map((item)=>{
            const uri = item.uri;
            const fileNameArray = uri.split("/");
            const fileName = fileNameArray[fileNameArray.length -1];
            const file = Platform.OS === "ios" ? uri.replace("file://") : uri;
    
            return{
                uri : uri,
                fileName : fileName,
                file : file
            }
        })
    

        return pikPhotoResultArray;
        // 이미지 선택후 스토리지 저장 및 저장된 URI 가져오는 프로세스 추가 하면됨. firebase 유료화 계정전환 이슈로 인해 건너뜀
        // TO-DO ...
    }catch(ex){
        console.log(ex);
    }
    
}