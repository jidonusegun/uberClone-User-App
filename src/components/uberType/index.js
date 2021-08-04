import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';
import UberTypeRow from '../../components/uberTypeRow';
import typesData from '../../assets/data/types';

export default function UberType() {
    
    const confirm = () => {
        console.warn({data: 'confirm'})
    }

    return (
        <View style={styles.container}>
            {typesData.map((type, index) => <UberTypeRow key={type.id} type={type} />)}
            <Pressable onPress={confirm} style={{
                width: '95%',
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center',
            }}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                }}>
                    Confirm UberX
                </Text>
            </Pressable>
        </View>
    )
}