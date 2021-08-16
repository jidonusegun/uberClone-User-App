import React from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function RouteMap({origin, destination}) {
// console.log(origin.details.geometry.location,)
    const originLoc = {
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng
    }

    const destinationLoc = {
        latitude: destination.details.geometry.location.lat,
        longitude: destination.details.geometry.location.lng
    }

//     const originLoc = {latitude: 28.450627, longitude: -16.263045};
// const destinationLoc = {latitude: 28.459627, longitude: -16.263045};

    const GOOGLE_MAPS_APIKEY = 'AIzaSyDEnv304ZlcDYlVAv6fWhEb38bwG29RnsY';

    return (
        <View style={{height: 250, backgroundColor: '#a0abff', justifyContent: 'center', alignItems: 'center'}}>
            <MapView
                style={{height: '100%', width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                latitude: 6.4418967,
                longitude: 2.9488494,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
                }}
            >
                <MapViewDirections
                    lineDashPattern={[0]}
                    origin={originLoc}
                    destination={destinationLoc}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={4}
                    strokeColor="black"
                />
                <Marker
                    coordinate={originLoc}
                    title="Origin"
                />
                <Marker
                    coordinate={destinationLoc}
                    title="Destination"
                />
            </MapView>
        </View>
    )
}
