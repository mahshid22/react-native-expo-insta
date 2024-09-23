import { View, Text, FlatList } from "react-native";
import React from "react";
import Posts from "@/constants/posts";
import PostCard from "./PostCard";

const PostContainer = () => {
  return (
    <FlatList
      data={Posts}
      renderItem={({ item, index }) => <PostCard  item={item} index={index} />}
      scrollEnabled={false}
      pagingEnabled
      contentContainerStyle={{ gap: 16 }}
      keyExtractor={(item)=> item.id.toString()}
    />
  );
};

export default PostContainer;
