import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import { router } from "expo-router";

interface Story {
  active: boolean;
  imageUrl: string;
  size: number;
  text?: string;
}
const SingleStory = ({ active = true, size, imageUrl, text }: Story) => {
  const { theme } = useTheme();
  const { background, accent, accentText, text: textColor } = theme.colors;
  const storyColor = active ? "#E3256B" : accent;

  return (
    <TouchableOpacity>
      <View style={[styles.container, { height: size + 5, width: size + 5 }]}>
        <Image
          source={{ uri: imageUrl }}
          style={[
            styles.image,
            { width: size, height: size, borderColor: storyColor },
          ]}
        />
      </View>
      {text && <Text style={[styles.text, { color: textColor }]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default SingleStory;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    borderRadius: 100,
    objectFit: "cover",
    borderWidth: 3,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
});
