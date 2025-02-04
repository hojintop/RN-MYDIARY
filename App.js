import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootApp from './src/RootApp';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { RecoilRoot } from 'recoil';

GoogleSignin.configure();

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <RootApp />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}

