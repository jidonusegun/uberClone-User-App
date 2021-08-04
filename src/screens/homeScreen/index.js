import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import HomeMap from '../../components/homeMap';
import CovidMessage from '../../components/covidMessage';
import HomeSearch from '../../components/homeSearch';

export default function HomeScreen() {
    return (
        <View>
            <View style={{height: Dimensions.get('window').height - 400}}>
                <HomeMap />
            </View>
            

            {/* Covid Message */}
            <CovidMessage />
            {/* Bottom Component */}
            <HomeSearch />
        </View>
    )
}