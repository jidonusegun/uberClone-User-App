import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 10,
        height: '100%',
        marginLeft: 20,
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
    },
    autoCompleteContainer: {
        position: 'absolute',
        top: 30,
        left: 10,
        right: 10,
    },
    listView: {
        position: 'absolute',
        top: 105,
    },
    separator: {
        backgroundColor: '#efefef',
        height: 1,
    },  
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius: 50,
        marginRight: 15,
    },
    locationText: {

    },
    circle: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 50,
        left: -5,
        borderRadius: 5,
    },
    line: {
        width: 2,
        height: 55,
        backgroundColor: '#919191',
        position: 'absolute',
        top: 60,
        left: -4,
    },
    square: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        position: 'absolute',
        top: 120,
        left: -5,
    },
})

export default styles