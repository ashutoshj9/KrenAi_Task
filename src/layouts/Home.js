import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../components/Home/Main";
import Item from "../components/Home/Item";
import { Ionicons, Feather } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const Home = ({ data }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen
        name="Item"
        // component={Item}
        children={() => <Item data={data} />}
        options={{
          headerBackImage: (prop) => <Ionicons name="chevron-back" size={25} />,
          headerTitle: "The Legacy Helen Row",
          headerTitleStyle: { marginLeft: -20, fontSize: 16 },
          headerRight: () => (
            <View
              style={{ flexDirection: "row", gap: 15, paddingHorizontal: "5%" }}
            >
              <TouchableOpacity>
                <Feather name="share-2" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="heart" size={25} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({});
