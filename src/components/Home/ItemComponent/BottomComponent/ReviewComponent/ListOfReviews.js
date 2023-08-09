import { StyleSheet, Text, View } from "react-native";
import React from "react";
import review from "../ReviewsList.json";
import { FlatList } from "react-native";
import { Image } from "react-native";
import StarFill from "./StarFill";

const ListOfReviews = () => {
  const renderReviews = ({ item }) => (
    <View style={styles.reviewsContainer}>
      <View style={styles.reviewTopItems}>
        <Image
          source={{ uri: item.personProfile }}
          style={styles.profileStyle}
          resizeMethod="resize"
        />
        <Text style={{ fontWeight: "800" }}>{item.person}</Text>
      </View>
      <View style={styles.reviewMiddleItems}>
        <StarFill rating={item.star} />
        <Text style={{ color: "rgba(0,0,0,0.5)" }}>{item.date}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 12, color: "#3E3E3E" }}>{item.review}</Text>
      </View>
    </View>
  );
  return (
    <FlatList
      data={review}
      renderItem={renderReviews}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListOfReviews;

const styles = StyleSheet.create({
  reviewsContainer: {
    padding: "5%",
  },
  reviewTopItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  profileStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  reviewMiddleItems: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "2%",
  },
});
