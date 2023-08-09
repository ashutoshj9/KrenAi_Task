import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./src/layouts/MainScreen/BottomNav";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "./src/layouts/UserAuth/Login";
import Starting from "./src/layouts/MainScreen/Starting";

const Tab = createSwitchNavigator({
  Start: Starting,
  Login: Login,
  MainScreen: BottomNav,
});

const App = createAppContainer(Tab);

export default () => {
  return <App />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
