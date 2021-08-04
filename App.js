import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import * as Location from 'expo-location'
import Router from './src/navigation/root';

Location.installWebGeolocationPolyfill()
navigator.geolocation.getCurrentPosition();

export default function App() {

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
    // else if(Platform.OS === 'ios') {
    //   Geolocation.requestAuthorization()
    // }
  },[])

  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}
