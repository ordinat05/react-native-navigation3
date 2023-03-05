import React from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import ProductListScreen from "./screens/productlist";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="nameLogin"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="nameHome"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="nameProduct"
          component={ProductListScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
