import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Welcome() {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={{ fontSize: 24 }}>Welcome back, Nigel</Text>
        <FontAwesome name="user-circle" size={40} color="black" />
      </View>
      <View style={styles.dropdown}>
        <Text>Last 7 Days</Text>
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
          <Text style={{ color: "#00ff00" }}>16%</Text> over the last month
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  mainCardTite: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
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
  },
  miniMeniItemText: {
    color: "#b4b6c8",
    fontSize: 14,
  },
  payoutText: {
    color: "#111",
    fontSize: 22,
    marginTop: 15,
    fontWeight: "500"
  },
});