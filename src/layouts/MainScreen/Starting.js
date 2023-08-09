import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";

const chapterAPIUrl =
  "https://stg-store.1pyq.net/api/v4/stores/chapter/topic/get-all-topics?chapterId=111";

const Starting = ({ navigation }) => {
  const token = navigation.getParam("token");
  const ChaptersApi = async () => {
    await axios
      .get(chapterAPIUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) =>
        navigation.navigate("MainScreen", { data: response.data.object })
      )
      .catch((err) => navigation.navigate("Login"));
  };
  useEffect(() => {
    ChaptersApi();
  }, []);
  return;
};

export default Starting;

const styles = StyleSheet.create({});
