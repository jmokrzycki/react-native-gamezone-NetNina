import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Header() {
  return (
    <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
      <View style={styles.headerTitle}>
        <Image style={styles.headerImage} source={require("../assets/heart_logo.png")} />
        <Text style={styles.headerText}>GameZone</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 0,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
