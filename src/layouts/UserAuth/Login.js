import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { Button } from "react-native";
import axios from "axios";

const loginApiUrl = `https://stg-account.1pyq.net/api/v4/customers/login-with-password/`;

const Login = ({ navigation }) => {
  let username = "amityadav5063@gmail.com";
  let password = "amityadav121";
  const LoginApi = async () => {
    await axios
      .get(loginApiUrl + `${username}/${password}`)
      .then((response) => {
        navigation.navigate("Start", { token: response.data.object.idToken });
      })
      .catch((error) => alert(error));
  };
  return (
    <View style={styles.LoginContainer}>
      <View style={styles.LoginBox}>
        <TextInput
          placeholder="Username"
          value={username}
          style={styles.textInputStyle}
          editable={false}
        />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.textInputStyle}
          editable={false}
        />
        <Button title="Login" color={"#FD001F"} onPress={LoginApi} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  LoginBox: {
    width: "100%",
    gap: 10,
    padding: "10%",
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});
