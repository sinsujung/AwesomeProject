import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import app from "./firebase";
import Toast from "react-native-toast-message";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Main"
              component={MainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
