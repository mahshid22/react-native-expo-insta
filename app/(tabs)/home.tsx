import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeNav from "@/components/home/HomeNav";
import Story from "@/components/home/Story";
import PostContainer from "@/components/home/PostContainer";

const HomePage = () => {
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;
  return (
    <View style={{ backgroundColor: background, flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
          <HomeNav />
          <Story />
          <PostContainer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
