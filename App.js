import React, { useEffect }from 'react';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './src/components/Footer';



export default function TUCT() {
  useEffect(()=>{
    SplashScreen.hide();
  }, []);
  useEffect(() =>{
    OneSignal.setAppId("9ee022f1-3226-4d41-94d2-671e9673b20c");
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
  }, []);
 return (
   <NavigationContainer>
    <Footer/>
   </NavigationContainer>
  );
}