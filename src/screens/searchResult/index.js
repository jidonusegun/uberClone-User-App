import React, {useState} from "react";
import { View, Alert, Dimensions } from "react-native";
import RouteMap from "../../components/routeMap";
import UberType from "../../components/uberType";
import { useRoute, useNavigation } from "@react-navigation/native";
import {createOrder} from '../../graphql/mutations';
import {API, graphqlOperation, Auth} from 'aws-amplify'

export default function SearchResult() {
  const route = useRoute();
  const navigation = useNavigation();
  const typeState = useState(null)

  const { originPlace, destinationPlace } = route.params;


  const onSubmit = async () => {
    const [type] = typeState

    const userInfo = await Auth.currentAuthenticatedUser();

    if(!type) {
      return
    }

    // submission to the database
    const date = new Date()
    try {
      const input = {
        createdAt: date.toISOString(),
        type,
        originLatitude: originPlace.details.geometry.location.lat,
        originLongitude: originPlace.details.geometry.location.lng,
        destinationLatitude: destinationPlace.details.geometry.location.lat,
        destinationLongitude: destinationPlace.details.geometry.location.lng,
        userId: userInfo.attributes.sub,
        carId: "1",
      }
      const response = await API.graphql(
        graphqlOperation(
          createOrder, {
            input: input
          }
        )
      )
      Alert.alert(
        "Confirm Order", 
        "Your order has been submitted",
        [
          {
            text: "Go Home",
            onPress: () => navigation.navigate("Home")
          }
        ]
      )
    } catch (e) {
      Alert.alert(e)
    }

  }

  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <UberType typeState={typeState} onSubmit={onSubmit} />
    </View>
  );
}
