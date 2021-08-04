import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <View {...props}>
      <View style={{ backgroundColor: "#212121", padding: 15 }}>
        {/* user row */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#cacaca",
              borderRadius: 50,
              marginRight: 10,
            }}
          ></View>
          <View>
            <Text style={{ color: "white", fontSize: 24 }}>Segun Jidonu</Text>
            <Text style={{ color: "lightgrey" }}>5.00 *</Text>
          </View>
        </View>

        {/* message row */}
        <View
          style={{
            borderTopColor: "#919191",
            borderTopWidth: 1,
            borderBottomColor: "#919191",
            borderBottomWidth: 1,
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          <Pressable onPress={() => console.warn("Message")}>
            <Text style={{ color: "white", paddingVertical: 5 }}>Message</Text>
          </Pressable>
        </View>

        {/* do more */}
        <Pressable onPress={() => console.warn("Do more with your account")}>
          <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        {/* make money */}
        <Pressable onPress={() => console.warn("Make money driving")}>
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </View>
  );
}
