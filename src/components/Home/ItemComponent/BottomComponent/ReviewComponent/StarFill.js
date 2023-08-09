import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const StarFill = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <FontAwesome key={i} name="star" size={15} style={styles.star} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesome
          key={fullStars + 1}
          name="star-half-full"
          size={15}
          style={styles.star}
        />
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesome
          key={fullStars + 1 + i}
          name="star"
          size={15}
          style={[styles.star, { color: "rgba(0,0,0,0.1)" }]}
        />
      );
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default StarFill;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  star: {
    marginRight: 5,
    color: "#ffb530",
  },
});
