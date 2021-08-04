import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function CovidMessage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel only if neccessary</Text>
            <Text  style={styles.text}>The Advanced menu in the Widget Appearance section allows you to change the color, size and shape of the chat widget. If you're looking for a way to make</Text>
            <Text style={styles.learnMore}>Learn More --{`>`}</Text>
        </View>
    )
}