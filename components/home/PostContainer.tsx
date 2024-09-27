import { View, Text, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import Posts from "@/constants/posts";
import PostCard from "./PostCard";

const PostContainer = ({handleOpenPress}:{handleOpenPress: ()=>void}) => {
  const [visibleVideoIndex, setVisibleVideoIndex] = useState<number | null>(
    null,
  );
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const index = viewableItems[0].index;
    setVisibleVideoIndex(index);
  });

  return (
    <FlatList
        data={Posts}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        contentContainerStyle={{
          gap: 16,
        }}
        renderItem={({ item, index }) => (
          <PostCard
            item={item}
            index={index}
            visibleVideoIndex={visibleVideoIndex}
            handleModal={handleOpenPress}
          />
        )}
      />
  );
};

export default PostContainer;
