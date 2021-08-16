import React, {useState, useEffect} from "react";
import { View, Text, Pressable, ActivityIndicator } from "react-native";
import {
  DrawerItemList,
} from "@react-navigation/drawer";
import {Auth} from 'aws-amplify';

export default function CustomDrawer(props) {
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState(null)

  useEffect(() => {
      async function getUser() {
        const attributes = await Auth.currentAuthenticatedUser();
        setUsername(attributes.signInUserSession.accessToken.payload.username)
      }
      getUser()
  },[])
  

  const logout = async () => {
      try {
        setLoading(true)
        await Auth.signOut();
        setLoading(false)
      } catch (error) {
        console.log('Error signing out: ', error);
      }
  }
  return (
    <View {...props}>
      <View style={{ backgroundColor: "#212121", padding: 15, paddingTop: 35 }}>
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
          <Text style={{ color: "white", fontSize: 24 }}>{username}</Text>
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

      <Pressable onPress={() => logout()}>
          <Text style={{ color: "red", fontWeight: 'bold', marginLeft: 20 }}>
            Logout {loading && <ActivityIndicator size="small" color="tomato" />}
          </Text>
        </Pressable>
    </View>
  );
}
