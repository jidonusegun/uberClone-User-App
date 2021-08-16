import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './style';
import PlaceRow from './placeRow';
import {useNavigation} from '@react-navigation/native';

export default function DestinationSearch() {

    const [originPlace, setOriginPlace] = useState('')
    const [destinationPlace, setDestinationPlace] = useState('')
    const navigation = useNavigation();

    const checkNavigation = () => {
        if(originPlace && destinationPlace) {
            navigation.navigate("SearchResult", {
                originPlace,
                destinationPlace,
            });
        }
    }

    useEffect(() => {
        checkNavigation()
    }, [originPlace, destinationPlace])

    const homePlace = {
        description: 'Home',
        geometry: { location: { lat: 6.4418967, lng: 2.9488494 } },
      };
      const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 6.440677000000001, lng: 2.916105 } },
      };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data, details = null) => {
                        setOriginPlace({data, details});
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyDEnv304ZlcDYlVAv6fWhEb38bwG29RnsY',
                        language: 'en',
                    }}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    currentLocation={true}
                    currentLocationLabel="Current Location"
                    styles={{
                        textInput: styles.textInput,
                        container: styles.autoCompleteContainer,
                        listView: styles.listView,
                        
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                    renderDescription={(data) => data.description || data.vicinity}
                    predefinedPlaces={[homePlace, workPlace]}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data , details =  null) => {
                        
                        setDestinationPlace({data, details});
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyDEnv304ZlcDYlVAv6fWhEb38bwG29RnsY',
                        language: 'en',
                    }}
                    suppressDefaultStyles
                    enablePoweredByContainer={false}
                    styles={{
                        textInput: styles.textInput,
                        container: {...styles.autoCompleteContainer, top: 90}
                    }}
                    renderRow={(data) => <PlaceRow data={data} />}
                />
                {/* circle near origin input */}
                <View style={styles.circle} />

                {/* line between dots */}
                <View style={styles.line} />

                {/* suare near destination input */}
                <View style={styles.square} />
            </View>
        </SafeAreaView>
    )
}