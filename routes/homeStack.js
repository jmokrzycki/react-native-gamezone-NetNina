import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerStyle: { backgroundColor: "#eee" } }}>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            // title: "HomeScreen",
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="ReviewDetailsScreen"
          component={ReviewDetails}
          options={{
            title: "ReviewDetailsScreen",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
