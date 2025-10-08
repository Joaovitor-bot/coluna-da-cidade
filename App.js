import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/screens/Home";
import NovaFofoca from "./src/screens/NovaFofoca";
import TelaSobre from "./src/screens/TelaSobre";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#d63384" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "🗞️ Coluna da Cidade" }}
        />
        <Stack.Screen
          name="NovaFofoca"
          component={NovaFofoca}
          options={{ title: "Nova Fofoca 💋" }}
        />
        <Stack.Screen
          name="TelaSobre"
          component={TelaSobre}
          options={{ title: "Sobre a Coluna" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
