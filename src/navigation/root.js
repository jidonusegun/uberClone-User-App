import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from '../navigation/home';
import CustomDrawer from './customDrawer';

export default function RootNavigation() {

    const Drawer = createDrawerNavigator();

    const DummyScreen = ({name}) => {
       return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{name}</Text>
        </View>
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
                <Drawer.Screen name="Home" component={HomeNavigator} />

                <Drawer.Screen name="Your Trips" >
                    {() => <DummyScreen name="Your Trips" />}
                </Drawer.Screen>

                <Drawer.Screen name="Help" >
                    {() => <DummyScreen name="Help" />}
                </Drawer.Screen>
                
                <Drawer.Screen name="Wallets" >
                    {() => <DummyScreen name="Wallets" />}
                </Drawer.Screen>

                <Drawer.Screen name="Settings" >
                    {() => <DummyScreen name="Settings" />}
                </Drawer.Screen>

            </Drawer.Navigator>
        </NavigationContainer>
    )
}