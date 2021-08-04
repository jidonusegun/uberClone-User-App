import React from 'react';
import HomeScreen from '../screens/homeScreen';
import DestinationSearch from '../screens/destinationSearch';
import SearchResult from '../screens/searchResult';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
            <Stack.Screen name="SearchResult" component={SearchResult} />
        </Stack.Navigator>
    )
}