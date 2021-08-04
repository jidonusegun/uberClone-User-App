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
        geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
      };
      const workPlace = {
        description: 'Work',
        geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
      };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data = GooglePlaceData, details = GooglePlaceData | null) => {
                        // 'details' is provided when fetchDetails = true
                        setOriginPlace(data, details);
                    }}
                    query={{
                        key: 'AIzaSyA0quzEdLoP9Oe0q-Vf8F0y6VtGGCoySaE',
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
                    onPress={(data = GooglePlaceData, details = GooglePlaceData | null) => {
                        // 'details' is provided when fetchDetails = true
                        setDestinationPlace(data, details);
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyA0quzEdLoP9Oe0q-Vf8F0y6VtGGCoySaE',
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