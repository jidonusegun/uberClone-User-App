import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';
import {Entypo, MaterialIcons} from '@expo/vector-icons';

export default function PlaceRow({data}) {
    return (
        <View style={styles.row}>
            {data.description === 'Home' ?
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name="home" size={20} color="white" />
                </View>
            : data.description === 'Work' ?
                    <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                        <MaterialIcons name="work" size={20} color="white" />
                    </View>
                    : <View style={styles.iconContainer}>
                        <Entypo name="location-pin" size={20} color="white" />
                    </View>}
            <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
        </View>
    )
}