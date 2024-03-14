import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import store from "./store";
import { Provider } from "react-redux";
import Basket from "./screens/Basket";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen name="Basket" component={Basket} options={{presentation: "modal", headerShown: false}} />
            <Stack.Screen name="PrepareOrder" component={PrepareOrder} options={{presentation: "fullScreenModal", headerShown: false}} />
            <Stack.Screen name="Delivery" component={Delivery} options={{presentation: "fullScreenModal", headerShown: false}} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
}
