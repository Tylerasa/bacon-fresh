import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function PayoutItem() {
  return (
    <View style={styles.card}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "/assets/images/fb.png",
        }}
      />
      <View>
        <Text>Gumroad</Text>
        <Text>Social Media</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderRadius: 20,
  },
});
