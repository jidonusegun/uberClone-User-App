import React from 'react';
import {View, Image, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './style';

export default function UberTypeRow({type}) {

    const getImage = () => {
        if(type.type === "UberX") {
            return require('../../assets/images/UberX.jpeg');
        }
        if(type.type === "Comfort") {
            return require('../../assets/images/Comfort.jpeg');
        }
        return require('../../assets/images/UberXL.jpeg');
    }

    return (
        <View style={styles.container}>
            {/* image content */}
            <Image style={styles.image} source={getImage()} />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type} {' '}
                    <Ionicons name='person' size={16} />
                    3
                </Text>
                <Text style={styles.time}>
                    {type.duration}min drop off
                </Text>
            </View>
            <View style={styles.rightContainer} >
                <Ionicons name='pricetag' size={18} color="green" />
                <Text style={styles.price}>
                    est. ${type.price}
                </Text>
            </View>
        </View>
    )
}