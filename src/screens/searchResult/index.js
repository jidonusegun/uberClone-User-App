import React from "react";
import { View, Text, Dimensions } from "react-native";
import RouteMap from "../../components/routeMap";
import UberType from "../../components/uberType";
import { useRoute } from "@react-navigation/native";

export default function SearchResult() {
  const route = useRoute();

  const { originPlace, destinationPlace } = route.params;

  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 400 }}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <UberType />
    </View>
  );
}
