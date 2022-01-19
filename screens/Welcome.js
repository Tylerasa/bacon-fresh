import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PayoutItem from "../components/PayoutItem";
import { StatusBar } from "expo-status-bar";

export default function Welcome() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar translucent style="auto" />
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontFamily: "regular" }}>
          Welcome back, Nigel
        </Text>
        <Image
          style={styles.profile}
          source={require("../assets/images/profile.png")}
        />
      </View>
      <View style={styles.dropdown}>
        <Text style={{ fontFamily: "regular" }}>Last 7 Days</Text>
        <AntDesign
          style={{ paddingHorizontal: 7 }}
          name="down"
          size={12}
          color="black"
        />
      </View>
      <View style={styles.mainCard}>
        <Text style={styles.mainCardText}>Total Commissions</Text>
        <Text style={styles.mainCardTite}>$4,179.02</Text>
        <Text style={styles.mainCardText}>
          <AntDesign name="arrowup" size={10} color="#00ff00" />
          <Text style={{ color: "#38a976" }}>16%</Text> over the last month
        </Text>
      </View>
      <View style={styles.miniMenu}>
        <View style={{ ...styles.miniMeniItem, ...{ marginRight: 5 } }}>
          <MaterialIcons name="touch-app" size={24} color="black" />
          <Text style={styles.miniMeniItemNumber}>483</Text>
          <Text style={styles.miniMeniItemText}>Clicks</Text>
        </View>
        <View style={{ ...styles.miniMeniItem, ...{ marginLeft: 5 } }}>
          <MaterialCommunityIcons
            name="account-convert"
            size={24}
            color="black"
          />
          <Text style={styles.miniMeniItemNumber}>6.8%</Text>
          <Text style={styles.miniMeniItemText}>Conversion Rate</Text>
        </View>
      </View>
      <Text style={styles.payoutText}>Payout</Text>
      <PayoutItem />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f7",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
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
  mainCard: {
    backgroundColor: "#010b67",
    padding: 40,
    marginTop: 20,
    borderRadius: 20,
    textAlign: "center",
  },
  mainCardText: {
    fontSize: 14,
    color: "#ecf0f7",
    textAlign: "center",
    fontFamily: "regular",
  },
  mainCardTite: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    fontFamily: "bold",
  },
  miniMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  miniMeniItem: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
    flex: 1,
  },
  miniMeniItemNumber: {
    color: "#010b67",
    fontSize: 40,
    fontFamily: "bold",
  },
  miniMeniItemText: {
    color: "#b4b6c8",
    fontSize: 14,
    fontFamily: "regular",
  },
  payoutText: {
    color: "#111",
    fontSize: 22,
    marginTop: 15,
    fontWeight: "500",
    marginBottom: 20,
    fontFamily: "bold",
  },
  profile: {
    width: 50,
    height: 50,
  },
});
