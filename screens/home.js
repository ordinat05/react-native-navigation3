import { View, Text, Button } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function Home_screen({ navigation }) {
  function login() {
    navigation.navigate("nameLogin");
  }
  function product() {
    navigation.navigate("nameProduct");
  }

  return (
    <View style={{ marginTop: 50, width: "70%", margin: 10 }}>
      <Text style={{ marginTop: 50 }}>Home Sayfası</Text>
      <Button
        color="#ff5c5c"
        title="Login Sayfasına Git"
        onPress={() => {
          //   alert("Ekrana Kutu Göster");
          login();
        }}
      />
      <Button
        color="#004d40"
        title="Product Sayfasına Git"
        onPress={() => {
          //   alert("Ekrana Kutu Göster");
          product();
        }}
      />
    </View>
  );
}
