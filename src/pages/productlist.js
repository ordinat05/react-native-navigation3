import { View, Text, Button } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function ProductList_screen({ navigation }) {
  function login() {
    navigation.navigate("nameLogin");
  }
  function home() {
    navigation.navigate("nameHome");
  }

  return (
    <View
      style={{
        marginTop: 50,
        width: "90%",
        height: "100%",
        margin: 10,
        backgroundColor: "#4db6ac",
      }}
    >
      <Text style={{ marginTop: 50 }}>Product Sayfası</Text>
      <Button
        color="#ff5c5c"
        title="Login Sayfasına Git"
        onPress={() => {
          //   alert("Ekrana Kutu Göster");
          login();
        }}
      />
      <Button
        // color="#004d40"
        title="Home Sayfasına Git"
        onPress={() => {
          //   alert("Ekrana Kutu Göster");
          home();
        }}
      />
    </View>
  );
}
