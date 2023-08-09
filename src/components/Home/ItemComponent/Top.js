import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ant from "react-native-vector-icons/AntDesign";
import ImageSlider from "./ImageSlider";

const DummyText =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown make a type specimen book.";

const images = [
  "https://rukminim2.flixcart.com/image/416/416/xif0q/book/z/1/h/ssc-mathematics-9500-pyqs-tcs-pattern-chapterwise-mcq-english-original-imagg24fy9rheadp.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/book/z/1/h/ssc-mathematics-9500-pyqs-tcs-pattern-chapterwise-mcq-english-original-imagg24fy9rheadp.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/416/416/xif0q/book/z/1/h/ssc-mathematics-9500-pyqs-tcs-pattern-chapterwise-mcq-english-original-imagg24fy9rheadp.jpeg?q=70",
];

const Top = () => {
  const SEPARATOR = <View style={styles.Separator}></View>;
  return (
    <View style={{}}>
      {/* <View style={styles.imageView}> */}
        {/* <Image
          source={{
            uri: "https://rukminim2.flixcart.com/image/416/416/xif0q/book/z/1/h/ssc-mathematics-9500-pyqs-tcs-pattern-chapterwise-mcq-english-original-imagg24fy9rheadp.jpeg?q=70",
          }}
          style={{ height: 300, width: "70%" }}
          resizeMode="cover"
        /> */}
        <ImageSlider images={images} />
      {/* </View> */}
      <View style={styles.itemDetails}>
        <View style={styles.itemTitle}>
          <Text style={{ fontSize: 18, fontWeight: "800", color: "#3E3E3E" }}>
            The Legecy Helen Row (105hr)
          </Text>
          <View style={styles.ratingStyle}>
            <Text style={{ color: "#fff", fontSize: 12, fontWeight: "800" }}>
              4.5
            </Text>
            <Ant name="star" size={12} color={"#fff"} />
          </View>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.AboutTitle}>BY: </Text>
          <Text style={styles.AboutValue}>Jeremy Irons</Text>
          {SEPARATOR}
          <Text style={styles.AboutTitle}>Source: </Text>
          <Text style={styles.AboutValue}>1PK</Text>
          {SEPARATOR}
          <Text style={styles.AboutTitle}>Listen: </Text>
          <Text style={styles.AboutValue}>400K</Text>
        </View>
        <Text style={{ fontSize: 12, color: "rgba(0,0,0,0.6)" }}>
          {DummyText}
        </Text>
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  Separator: {
    backgroundColor: "#000",
    width: 2,
    marginHorizontal: "2%",
  },
  imageView: {
    alignItems: "center",
    padding: "5%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.1)",
    elevation: 1,
  },
  itemTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingStyle: {
    backgroundColor: "#3EAF00",
    paddingHorizontal: "3%",
    paddingVertical: "2%",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  itemDetails: {
    marginVertical: "5%",
  },
  aboutItem: {
    flexDirection: "row",
    marginVertical: "2%",
  },
  AboutTitle: {
    fontSize: 10,
    textAlignVertical: "center",
    color: "rgba(0,0,0,0.6)",
  },
  AboutValue: {
    fontSize: 10,
    fontWeight: "800",
    textAlignVertical: "center",
    color: "#3E3E3E",
  },
});
