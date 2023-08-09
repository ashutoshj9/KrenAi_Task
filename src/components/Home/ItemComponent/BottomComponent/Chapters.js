import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import data from "./ChaptersList.json";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import Ant from "react-native-vector-icons/AntDesign";
// import Sound from "react-native-sound";

const Chapters = ({ ChapterData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [playPause, setPlayPause] = useState(null);

  //#region SOUND PLAYER NOT WORKING
  //PLEASE CHECK URL IF IT WORK FOR AUDIO PLAYER
  //https://www.youtube.com/watch?v=Db6yX0FXc7I&list=PLjkZ-jPznkRu-xRmbo6n8XjCx0Z1mICau&index=1
  // const [videoUrl, setVideoUrl] = useState("");
  // const [sound, setSound] = useState(null);

  // useEffect(() => {
  //   Sound.setCategory("Playback");
  //   const newSound = new Sound(videoUrl, "", (error) => {
  //     if (error) {
  //       console.log("Error loading sound: ", error);
  //     }
  //   });
  //   setSound(newSound);

  //   return () => {
  //     if (sound) {
  //       sound.release();
  //     }
  //   };
  // }, [videoUrl]);

  // const playSound = () => {
  //   if (sound) {
  //     sound.play((success) => {
  //       if (!success) {
  //         console.log("Playback failed due to audio decoding errors.");
  //       }
  //     });
  //   }
  // };
  //#endregion

  //#region RENDER CHAPTERS
  const renderChapters = ({ index, item }) => (
    <View
      style={{
        padding: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FAFBFB",
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text>{item.id}</Text>
        <Text>{item.topicName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setPlayPause(playPause === index ? -1 : index);
          // setVideoUrl(item.audioUrl);
          // playSound();
        }}
      >
        <Ant
          name={playPause === index ? "pausecircleo" : "playcircleo"}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
  //#endregion
  //#region RENDER SUBJECTS
  const renderSubjects = ({ index, item }) => (
    <>
      <TouchableOpacity
        style={{
          padding: "5%",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#FAFBFB",
          marginBottom: expandedIndex === index ? 0 : "5%",
        }}
        onPress={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text>{item.id}.</Text>
          <Text>{item.name}</Text>
        </View>
        <Ant name={expandedIndex === index ? "minus" : "plus"} size={20} />
      </TouchableOpacity>
      {expandedIndex === index && (
        <FlatList
          data={ChapterData}
          keyExtractor={(item) => item.id}
          renderItem={renderChapters}
          style={{ marginBottom: "5%" }}
        />
      )}
    </>
  );
  //#endregion
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderSubjects}
    />
  );
};

export default Chapters;

const styles = StyleSheet.create({});
