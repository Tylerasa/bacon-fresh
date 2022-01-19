import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent style="auto" />
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f7",
    paddingTop: 30,
    paddingHorizontal: 20
  },
});
