import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Chapters from "./BottomComponent/Chapters";
import Reviews from "./BottomComponent/Reviews";
import ChapterList from "./BottomComponent/ChaptersList.json";

const Bottom = ({ data }) => {
  const [chapters, setChapters] = useState(true);
  const No_of_Chapter = ChapterList.reduce((a, b) => a + b.data.length, 0);
  return (
    <>
      <View style={styles.BottomContainer}>
        <TouchableOpacity
          style={[
            styles.BottomButtonStyle,
            {
              borderBottomWidth: chapters ? 2 : 0,
              borderBottomColor: chapters ? "#FD001F" : "rgba(0,0,0,0.5)",
            },
          ]}
          onPress={() => setChapters(true)}
        >
          <Text
            style={[
              styles.BottomButtonText,
              { color: chapters ? "#FD001F" : "rgba(0,0,0,0.5)" },
            ]}
          >
            CHAPTERS
          </Text>
          <Text
            style={{
              fontSize: 10,
              backgroundColor: chapters
                ? "rgba(253, 0, 31, 0.1)"
                : "rgba(0,0,0,0.1)",
              padding: 4,
              paddingHorizontal: 5,
              borderRadius: 100,
              color: chapters ? "rgba(253, 0, 31, 1)" : "rgba(0,0,0,0.5)",
            }}
          >
            {No_of_Chapter}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.BottomButtonStyle,
            {
              borderBottomWidth: !chapters ? 2 : 0,
              borderBottomColor: !chapters ? "#FD001F" : "rgba(0,0,0,0.5)",
            },
          ]}
          onPress={() => setChapters(false)}
        >
          <Text
            style={[
              styles.BottomButtonText,
              { color: !chapters ? "#FD001F" : "rgba(0,0,0,0.5)" },
            ]}
          >
            REVIEWS
          </Text>
        </TouchableOpacity>
      </View>
      {chapters ? <Chapters ChapterData={data} /> : <Reviews />}
    </>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  BottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.2,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  BottomButtonStyle: {
    alignItems: "center",
    paddingVertical: "4%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  BottomButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
