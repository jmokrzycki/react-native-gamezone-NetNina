import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { images } from "../styles/global";

export default function ReviewDetails({ navigation, route }) {
  const { item } = route.params;

  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>ReviewDetails screen</Text>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <Text>{item.rating}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[item.rating]} />
        </View>
      </Card>
      {/* <Button title="back to home screen" onPress={pressHandler} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
