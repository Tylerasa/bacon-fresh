import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./screens/Welcome";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Overview from "./screens/Overview";

export default function App() {
  let [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/DMSans-Regular.ttf"),
    bold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar translucent style="auto" />
        {/* <Welcome /> */}
        <Overview/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f7",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
