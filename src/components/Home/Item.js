import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Top from "./ItemComponent/Top";
import Middle from "./ItemComponent/Middle";
import Bottom from "./ItemComponent/Bottom";
import { ScrollView } from "react-native";

const Item = ({ data }) => {
  return (
    <View style={styles.ItemContainer}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: "5%", paddingBottom: 0 }}>
          <Top />
          <Middle />
        </View>
        <Bottom data={data} />
      </ScrollView>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
