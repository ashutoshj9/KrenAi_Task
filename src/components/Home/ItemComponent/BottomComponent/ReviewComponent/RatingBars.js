import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import FontA from "react-native-vector-icons/FontAwesome";

const RatingBars = () => {
  return (
    <View style={{ flex: 0.5 }}>
      <View style={styles.ratingSeries}>
        <View style={styles.ratingSeriesText}>
          <Text style={{ flex: 0.7, textAlign: "center" }}>5</Text>
          <FontA name="star" size={12} color={"#ffb530"} />
        </View>
        <View style={styles.ratingBar}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "#ffb530",
                width: "80%",
                borderRadius: 10,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.ratingSeries}>
        <View style={styles.ratingSeriesText}>
          <Text style={{ flex: 0.7, textAlign: "center" }}>4</Text>
          <FontA name="star" size={12} color={"#ffb530"} />
        </View>
        <View style={styles.ratingBar}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "#ffb530",
                width: "40%",
                borderRadius: 10,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.ratingSeries}>
        <View style={styles.ratingSeriesText}>
          <Text style={{ flex: 0.7, textAlign: "center" }}>3</Text>
          <FontA name="star" size={12} color={"#ffb530"} />
        </View>
        <View style={styles.ratingBar}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "#ffb530",
                width: "30%",
                borderRadius: 10,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.ratingSeries}>
        <View style={styles.ratingSeriesText}>
          <Text style={{ flex: 0.7, textAlign: "center" }}>2</Text>
          <FontA name="star" size={12} color={"#ffb530"} />
        </View>
        <View style={styles.ratingBar}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "#ffb530",
                width: "10%",
                borderRadius: 10,
              },
            ]}
          />
        </View>
      </View>
      <View style={styles.ratingSeries}>
        <View style={styles.ratingSeriesText}>
          <Text style={{ flex: 0.7, textAlign: "center" }}>1</Text>
          <FontA name="star" size={12} color={"#ffb530"} />
        </View>
        <View style={styles.ratingBar}>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: "#ffb530",
                width: "0%",
                // borderRadius: 10,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default RatingBars;

const styles = StyleSheet.create({
  ratingSeries: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  ratingBar: {
    height: 15,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
    flex: 0.8,
  },
  ratingSeriesText: {
    flex: 1 / 6,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
