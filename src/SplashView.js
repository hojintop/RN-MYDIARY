import { View } from "react-native"
import Typography from "./components/Typography"
import { useEffect, useState } from "react"
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin"
import firebaseAuth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { stateUserInfo } from "./states/stateUserInfo"

export default(props)=>{

    // useEffect(()=>{
    //     setTimeout(() => {
    //         props.onFinishLoad();
    //     }, 1000);
    // },[])

    // return(
    //     <View style={{flex:1 , justifyContent: "center", alignItems: "center", }}>
    //         <Typography fontSize={26}>SPLASH</Typography>
    //     </View>
    // )

    const [showLoginButton, setShowLoginButton] = useState(false);

    const setUserInfo = useSetRecoilState(stateUserInfo);

    async function signinUserIdentify(idToken){
        try {
            const credential = firebaseAuth.GoogleAuthProvider.credential(idToken)
            
            const result = await firebaseAuth().signInWithCredential(credential);
            
            // console.log(result);

            const userDBRefKey = `/users/${result.user.uid}`;
            const userResult = await database().ref(userDBRefKey).once("value").then((snapshot)=>{
                return snapshot.val();
            })

            // console.log(userResult);
            const now = new Date().toISOString();

            if(userResult === null){
                await database().ref(userDBRefKey).set({
                    name:result.additionalUserInfo.profile.name,
                    profileImage:result.additionalUserInfo.profile.picture,
                    uid:result.user.uid,
                    password:"",
                    createdAt:now,
                    lastLoginAt:now,
                })
            }else{
                await database().ref(userDBRefKey).update({
                    lastLoginAt:now,
                })
            }

            const userInfo = await database().ref(userDBRefKey).once("value").then((snapshot)=>snapshot.val());

            setUserInfo(userInfo);
           
            props.onFinishLoad();
          

        }catch(ex){
            console.log(ex);
        }
        
    }

    async function onPressGoogleSignin(){
        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            signinUserIdentify(response.data.idToken);
        } catch (ex) {
        }
    }

    async function userSilentLogin(){
        try {
          const response = await GoogleSignin.signInSilently();
          signinUserIdentify(response.data.idToken);
        } catch (ex) {
            setShowLoginButton(true);
        }
    }

    useEffect(()=>{
        userSilentLogin();
    },[])

    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            {showLoginButton && <GoogleSigninButton onPress={onPressGoogleSignin}/>}
        </View>
    )
}