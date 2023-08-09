import React, { useState } from "react";
import { View, Image, StyleSheet, PanResponder, Animated } from "react-native";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = new Animated.Value(0);
  const maxTranslateX = -(images.length - 1) * 300;

  const handleSwipe = (gestureState) => {
    const swipeDirection = Math.sign(gestureState.dx);
    const newIndex = currentIndex - swipeDirection;

    if (newIndex >= 0 && newIndex < images.length) {
      setCurrentIndex(newIndex);
      animateSlider(-newIndex * 300);
    }
  };

  const animateSlider = (toValue) => {
    Animated.timing(translateX, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const nextTranslateX = -currentIndex * 300 + gestureState.dx;
      if (nextTranslateX >= 0) {
        translateX.setValue(0);
      } else if (nextTranslateX <= maxTranslateX) {
        translateX.setValue(maxTranslateX);
      } else {
        translateX.setValue(nextTranslateX);
      }
    },
    onPanResponderRelease: (event, gestureState) => {
      handleSwipe(gestureState);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.imageSlider,
            {
              transform: [{ translateX }],
            },
          ]}
        >
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: "5%",
    backgroundColor: "#fff",
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.1)",
    elevation: 1,
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: 'center',
  },
  imageContainer: {
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  imageSlider: {
    flexDirection: "row",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});

export default ImageSlider;
