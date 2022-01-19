import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Overview() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.info}>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/images/fb.png")}
          />
          <Text style={{ fontFamily: "bold", fontSize: 22, marginLeft: 10 }}>
            Facebook
          </Text>
        </View>
        <Ionicons name="settings-outline" size={24} color="black" />
      </View>
      <View style={styles.main}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontFamily: "bold" }}>Overview</Text>
          <View style={styles.dropdown}>
            <Text style={{ fontFamily: "regular" }}>Last 7 Days</Text>
            <AntDesign
              style={{ paddingHorizontal: 7 }}
              name="down"
              size={12}
              color="black"
            />
          </View>
        </View>
        <Text style={{ fontFamily: "regular", marginTop: 10 }}>
          Commissions increased by <Text style={{ color: "#38a976" }}>12%</Text>{" "}
          compared to the previous week
        </Text>
        <View style={styles.card}>
          <View style={{ ...styles.miniMeniItem, ...{ marginRight: 5 } }}>
            <Text style={styles.miniMeniItemNumber}>$1298.09</Text>
            <Text style={styles.miniMeniItemText}>Commissions</Text>
          </View>
          <View style={{ ...styles.miniMeniItem, ...{ marginLeft: 5 } }}>
            <Text style={styles.miniMeniItemNumber}>8.7%</Text>
            <Text style={styles.miniMeniItemText}>Conversion Rate</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ ...styles.miniMeniItem, ...{ marginRight: 5 } }}>
            <Text style={styles.miniMeniItemNumber}>1,087</Text>
            <Text style={styles.miniMeniItemText}>Views</Text>
          </View>
          <View style={{ ...styles.miniMeniItem, ...{ marginLeft: 5 } }}>
            <Text style={styles.miniMeniItemNumber}>128</Text>
            <Text style={styles.miniMeniItemText}>Clicks</Text>
          </View>
        </View>
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
    alignItems: "center",
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  main: {
    marginTop: 20,
  },
  dropdown: {
    backgroundColor: "white",
    paddingHorizontal: 14,
    paddingRight: 7,
    paddingVertical: 5,
    color: "black",
    width: "auto",
    borderRadius: 20,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  miniMeniItem: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
    flex: 1,
  },
  miniMeniItemNumber: {
    color: "#010b67",
    fontSize: 30,
    fontFamily: "bold",
  },
  miniMeniItemText: {
    color: "#b4b6c8",
    fontSize: 14,
    fontFamily: "regular",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
