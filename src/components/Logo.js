import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import logo from "../../assets/images/Maksan.png";

export default class Logo extends React.Component {
  render() {
    return (
      <View style={StyleSheet.logoContainer}>
        <Image
          source={logo}
          resizeMode={"contain"}
          style={{ width: 250, height: 100 }}
        ></Image>
      </View>
    );
  }
}
