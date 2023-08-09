import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialC from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Home from "../Home";
import Playlists from "../Playlists";
import Bookmark from "../Bookmark";
import Profile from "../Profile";

const Tab = createBottomTabNavigator();

export default function BottomNav({ navigation }) {
  const data = navigation.getParam("data");
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarActiveTintColor: "#FD001F" }}
      >
        <Tab.Screen
          name="Home"
          children={() => <Home data={data} />}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="home"
                size={focused ? size : 20}
                color={focused ? "#fff" : "#3E3E3E"}
                style={{
                  backgroundColor: focused ? "#FD001F" : "#fff",
                  padding: "5%",
                  borderRadius: 50,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Playlist"
          component={Playlists}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <MaterialC
                name="playlist-music-outline"
                size={focused ? size : 24}
                color={focused ? "#fff" : "#3E3E3E"}
                style={{
                  backgroundColor: focused ? "#FD001F" : "#fff",
                  padding: "5%",
                  borderRadius: 50,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={Bookmark}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Feather
                name="heart"
                size={focused ? size : 20}
                color={focused ? "#fff" : "#3E3E3E"}
                style={{
                  backgroundColor: focused ? "#FD001F" : "#fff",
                  padding: "5%",
                  borderRadius: 50,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, size }) => (
              <MaterialC
                name="account-outline"
                size={focused ? size : 24}
                color={focused ? "#fff" : "#3E3E3E"}
                style={{
                  backgroundColor: focused ? "#FD001F" : "#fff",
                  padding: "5%",
                  borderRadius: 50,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
