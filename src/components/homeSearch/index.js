import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {MaterialIcons, AntDesign, Entypo} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export default function HomeSearch() {

    const navigation  = useNavigation();

    const goToSearch = () => {
        navigation.navigate("DestinationSearch")
    }

    return (
        <View>
            {/* input box */}
            <Pressable onPress={goToSearch} style={styles.inputBox}>
                <Text style={styles.inputText}>Where To?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name='clockcircle' size={16} color='black' />
                    <Text>Now</Text>
                    <MaterialIcons name='keyboard-arrow-down' size={16} />
                </View>
            </Pressable>
            {/* previous destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name='clockcircle' size={20} color='white' />   
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>
            {/* home destination */}
            <View style={styles.row}>
                <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                    <Entypo name='home' size={20} color='white' />   
                </View>
                <Text style={styles.destinationText}>Home</Text>
            </View>
        </View>
    )
}