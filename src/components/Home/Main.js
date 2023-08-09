import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ padding: "5%", backgroundColor: "#000", alignItems: "center" }}
        onPress={() => navigation.navigate("Item")}
      >
        <Text style={{ color: "#fff" }}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
