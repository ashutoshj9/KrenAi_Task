import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import RatingBars from "./ReviewComponent/RatingBars";
import StarFill from "./ReviewComponent/StarFill";
import ListOfReviews from "./ReviewComponent/ListOfReviews";
import { TouchableOpacity } from "react-native";

const Reviews = () => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.topContent}>
        <View style={styles.averageRating}>
          <Text style={styles.averageRatingText}>4.0</Text>
          <StarFill rating={4} />
          <Text style={styles.NoOfRating}>300 Ratings</Text>
        </View>
        <RatingBars />
      </View>
      <ListOfReviews />
      <View style={styles.writeReviewContainer}>
        <TouchableOpacity style={styles.writeReviewButton}>
          <Text style={styles.writeReviewButtonText}>Write Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  reviewContainer: {},
  topContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "5%",
  },
  averageRating: {
    flex: 0.5,
    alignItems: "center",
  },
  averageRatingText: {
    fontSize: 40,
    color: "#3E3E3E",
  },
  NoOfRating: {
    color: "rgba(0,0,0,0.7)",
    fontWeight: "600",
    fontSize: 12,
  },
  writeReviewContainer: {
    padding: "5%",
  },
  writeReviewButton: {
    backgroundColor: "#FD001F",
    padding: "5%",
    alignItems: "center",
    borderRadius: 5,
  },
  writeReviewButtonText: {
    color: "#fff",
    fontWeight: "800",
    letterSpacing: 1,
  },
});
