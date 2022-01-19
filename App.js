import Welcome from "./screens/Welcome";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Overview from "./screens/Overview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/DMSans-Regular.ttf"),
    bold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Overview" component={Overview} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
