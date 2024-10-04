import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import Header from "../shared/header";
import React from "react";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerStyle: { backgroundColor: "#eee" } }}>
        <Stack.Screen
          name="AboutScreen"
          component={About}
          options={{
            title: "AboutScreen",
            // headerTitle: () => <Header />,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
