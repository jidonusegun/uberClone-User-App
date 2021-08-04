import React from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';

const getImage = (type) => {
    if(type === "UberX") {
        return require('../../assets/images/top-UberX.png');
    }
    if(type === "Comfort") {
        return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
}

export default function HomeMap() {

    return (
        <View style={{height: 250, backgroundColor: '#a0abff', justifyContent: 'center', alignItems: 'center'}}>
            <MapView
                style={{height: '100%', width: '100%'}}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
                }}
            >
                <CarMap cars={cars} />
            </MapView>
        </View>
    )
}


export const CarMap = ({ cars}) => {
    return cars.map((car) => (
      <Marker
        key={car.id}
        coordinate={{
            latitude: car.latitude,
            longitude: car.longitude,
        }}
      >
          <Image style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                  rotate: `${car.heading}deg`
              }]
              }} source={getImage(car.type)} />
      </Marker>
    ));
  };