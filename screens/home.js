import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    { title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "Gotta Catch Them All (again)", rating: 4, body: "lorem ipsum", key: "2" },
    { title: 'Not So "Final" Fantasy', rating: 3, body: "lorem ipsum", key: "3" },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => [...currentReviews, review]);
    setModalOpen(false);
  };

  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  //   // navigation.push("ReviewDetails");
  // };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide" style={styles.modalContent}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <MaterialIcons
              name="close"
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons name="add" style={styles.modalToggle} size={24} onPress={() => setModalOpen(true)} />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("ReviewDetailsScreen", { item })}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      {/* <Text style={globalStyles.titleText}>Home screen</Text> */}
      {/* <Button title="go to review dets" onPress={pressHandler} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
