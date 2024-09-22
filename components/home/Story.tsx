import { View, Text, FlatList } from "react-native";
import React from "react";
import Posts, { PostType } from "@/constants/posts";
import SingleStory from "./SingleStory";
import { useTheme } from "@/utils/ThemeContext";
const Story = () => {
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 20,
      }}
      data={Posts}
      renderItem={OneStory}
    />
  );
};

export default Story;

const OneStory = ({ item }: { item: PostType }) => {
  return <SingleStory imageUrl={item.user.avatar_url} size={75} active/>;
};
