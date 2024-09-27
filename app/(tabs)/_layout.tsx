import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Foundation, MaterialIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TabLayout = () => {
  return (
    <GestureHandlerRootView>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          lazy: true,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            tabBarIcon: ({ color }) => (
              <Foundation name="home" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default TabLayout;
