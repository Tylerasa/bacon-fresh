import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { LineChart } from "react-native-chart-kit";
export default function Overview() {
  const graphData = [3, 4, 6, 7, 9, 0, 1, 5];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar translucent style="auto" />

      <View style={styles.header}>
        <TouchableHighlight>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableHighlight>
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

      <View style={styles.graph}>
        <Text style={{ fontSize: 20, fontFamily: "bold", color: "#010b67" }}>
          Daily Breakdown
        </Text>
        <Text
          style={{ fontFamily: 14, fontFamily: "regular", color: "#b4b6c8" }}
        >
          January 6, 2021
        </Text>
        <View style={styles.bars}>
          {graphData.map((ele, i) => {
            return (
              <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#010b67"
                key={i}
              >
                <View>
                  <View
                    style={{ ...styles.bar, ...{ height: 15 * ele } }}
                  ></View>
                  <Text style={styles.graphText}>{ele}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.textRow}>
            <View>
              <Text style={styles.textMain}>$45.32</Text>
              <Text style={styles.textSub}>Commissions</Text>
            </View>
            <View>
              <Text style={styles.textMain}>4.3%</Text>
              <Text style={styles.textSub}>Conversion Rate</Text>
            </View>
          </View>
          <View style={styles.textRow}>
            <View>
              <Text style={styles.textMain}>173</Text>
              <Text style={styles.textSub}>Views</Text>
            </View>
            <View>
              <Text style={styles.textMain}>14</Text>
              <Text style={styles.textSub}>Clicks</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={{fontFamily: "bold", fontSize: 18, marginBottom: 10}}>Traffic</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f7",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
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
  graph: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  bars: {
    flexDirection: "row",
    transform: [{ rotate: "180deg" }],
  },
  bar: {
    width: 30,
    backgroundColor: "#b4b6c8",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  graphText: {
    transform: [{ rotate: "180deg" }],
    textAlign: "center",
    fontFamily: "regular",
    color: "#010b67",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  textMain: {
    fontSize: 18,
    fontFamily: "bold",
    color: "#010b67",
  },
  textSub: {
    fontSize: 14,
    color: "#b4b6c8",
    fontFamily: "regular"
  },
});
