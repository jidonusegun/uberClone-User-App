import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';
import UberTypeRow from '../../components/uberTypeRow';
import typesData from '../../assets/data/types';

export default function UberType({typeState, onSubmit}) {
    const [selectedType, setSelectedType] = typeState

    return (
        <View style={styles.container}>
            {typesData.map((type, index) => 
                <UberTypeRow 
                    key={type.id} 
                    type={type} 
                    isSelected={type.type === selectedType}
                    onPress={() => setSelectedType(type.type)}
                />
            )}
            <Pressable onPress={onSubmit} style={{
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
                    Confirm {selectedType}
                </Text>
            </Pressable>
        </View>
    )
}