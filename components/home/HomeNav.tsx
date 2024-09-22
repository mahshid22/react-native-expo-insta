import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import { AntDesign, Feather } from "@expo/vector-icons";
import {} from "react-native-gesture-handler";
import { Link } from "expo-router";

const HomeNav = () => {
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 16,
        paddingVertical: 4,
      }}
    >
      <TouchableOpacity style={{
        flexDirection: "row",
        alignItems: "center"
      }}>
        <Image
          source={require("../../assets/images/insta_logo.png")}
          style={{ objectFit: "cover", height: 44, width: 120 }}
        />
        <AntDesign name="down" size={16} color={text} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Link href={"/Notifications"}>
          <Feather name="heart" size={24} color={text} />
        </Link>
        <Link href={"/messages"}>
          <AntDesign name="message1" size={24} color={text} />
        </Link>
      </View>
    </View>
  );
};

export default HomeNav;
