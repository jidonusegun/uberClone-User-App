import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import * as Location from 'expo-location'
import Router from './src/navigation/root';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from "aws-amplify";

Amplify.configure({
  Auth: { 
    // REQUIRED --Amazon Cognito Identity Pool ID 
    identityPoolId: 'us-east-1:b923d95f-93ab-4b83-9e3c-682e603d4320' ,  
    // REQUIRED --Amazon Cognito Region 
    region: 'us-east-1' ,  
    // OPTIONAL --Amazon Cognito User Pool ID 
    userPoolId: 'us-east-1_oo5ywGGHh' , 
    // OPTIONAL --Amazon Cognito Web Client ID 
    userPoolWebClientId: 'tqbhb4reuvevi893g6l45fml2' ,  
    oauth: {} , 
  } , 
  Analytics: { 
    disabled: true 
  } ,
});

Location.installWebGeolocationPolyfill()
navigator.geolocation.getCurrentPosition();

const App = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Location Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if(Platform.OS === 'android') {
      androidPermission()
    }
  },[])

  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}

export default withAuthenticator(App)