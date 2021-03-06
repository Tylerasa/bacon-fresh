import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function PayoutItem({ navigation }) {
  const images = [
    {
      id: 1,
      name: "Facebook",
      image: require("../assets/images/fb.png"),
      text: "Social Media App",
    },
    {
      id: 2,
      name: "Instagram",
      image: require("../assets/images/ig.png"),
      text: "Photo Sharing App",
    },
    {
      id: 3,
      name: "Pinterest",
      image: require("../assets/images/pinterest.png"),
      text: "Photo Sharing App",
    },
    {
      id: 4,
      name: "Tiktok",
      image: require("../assets/images/tiktok.png"),
      text: "Video Sharing App",
    },
    {
      id: 5,
      name: "Twitter",
      image: require("../assets/images/twitter.png"),
      text: "Soial Media App",
    },
    {
      id: 6,
      name: "Youtube",
      image: require("../assets/images/yt.png"),
      text: "Video Platform",
    },
  ];
  const Item = ({ name, text, image }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Overview")}>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image style={styles.tinyLogo} source={image} />
          <View style={styles.text}>
            <Text style={styles.cardMain}>{name}</Text>
            <Text style={{ fontFamily: "regular" }}>{text}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.itemText}>$787.7</Text>
          <AntDesign name="right" size={14} color="#b4b6c8" />
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item name={item.name} text={item.text} image={item.image} />
  );
  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tinyLogo: {
    width: 40,
    height: 40,
  },
  itemText: {
    color: "#010b67",
    marginRight: 10,
    fontFamily: "bold",
  },
  cardMain: {
    fontSize: 18,
    fontFamily: "bold",
  },
  text: {
    marginLeft: 10,
  },
});
