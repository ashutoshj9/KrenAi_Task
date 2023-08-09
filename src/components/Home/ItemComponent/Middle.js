import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { Feather, Octicons } from "react-native-vector-icons";
import MaterialC from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

const MiddleItemList = [
  {
    id: 0,
    name: "Buy hard copy",
    icon: <Feather name="book" size={12} color={"#3E3E3E"} />,
  },
  {
    id: 1,
    name: "Create book",
    icon: <Octicons name="pencil" size={12} color={"#3E3E3E"} />,
  },
  {
    id: 2,
    name: "Video",
    icon: <Octicons name="video" size={12} color={"#3E3E3E"} />,
  },
];

const Middle = () => {
  const ListButton = MiddleItemList.map((item) => (
    <TouchableOpacity key={item.id} style={styles.ListButton}>
      {item.icon}
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          textAlign: "center",
          color: "#3E3E3E",
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  ));
  return (
    <View style={{}}>
      <View style={styles.MiddleButtonContainer}>
        <TouchableOpacity style={styles.PlayButton}>
          <Image
            source={require("../../../../assets/icons/audio_wave.png")}
            style={{ height: 20, width: 20 }}
          />
          <Text style={{ color: "#fff", fontWeight: "800" }}>Play Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SubscribeButton}>
          <MaterialC name="crown-outline" size={20} color={"#FD001F"} />
          <Text style={{ color: "#FD001F", fontWeight: "800" }}>
            Subscribe Now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ListView}>{ListButton}</View>
    </View>
  );
};

export default Middle;

const styles = StyleSheet.create({
  MiddleButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  PlayButton: {
    backgroundColor: "#FD001F",
    flex: 0.5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
  },
  SubscribeButton: {
    backgroundColor: "#fff",
    flex: 0.5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#FD001F",
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
  },
  ListView: {
    // borderWidth: 1,
    marginVertical: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ListButton: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
  },
});
