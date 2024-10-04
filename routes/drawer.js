import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "../routes/homeStack";
import AboutNavigation from "../routes/aboutStack";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      {/* headerShown -> hide stack header */}
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{}}>
        <Drawer.Screen name="HomeStack" component={HomeNavigation} />
        <Drawer.Screen name="AboutStack" component={AboutNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
