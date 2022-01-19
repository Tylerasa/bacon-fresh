import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function OVerview() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <View style={styles.info}></View>
        <Ionicons name="settings-outline" size={24} color="black" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
