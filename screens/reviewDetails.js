import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation, route }) {
  const { item } = route.params;

  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails screen</Text>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rating}</Text>
      {/* <Button title="back to home screen" onPress={pressHandler} /> */}
    </View>
  );
}
