import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingPage = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      <Text>setting</Text>
    </SafeAreaView>
  );
};

export default SettingPage;
