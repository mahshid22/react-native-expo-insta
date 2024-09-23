import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { MutableRefObject } from "react";
import { PostType } from "@/constants/posts";

const ImageContainer = ({
  item,
  onViewableItemsChanged,
  viewabilityConfig,
}: {
  item: PostType;
  onViewableItemsChanged: MutableRefObject<(item: any) => void>;
  viewabilityConfig: MutableRefObject<{ itemVisiblePercentThreshold: number }>;
}) => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      data={item.images}
      horizontal
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
      pagingEnabled
      renderItem={({ item }) => (
        <View style={[styles.ImageContainer, { width: width, aspectRatio: 1 }]}>
          <Image source={{ uri: item }} style={styles.image} />
        </View>
      )}
    />
  );
};

export default ImageContainer;

const styles = StyleSheet.create({
  ImageContainer: {
    backgroundColor: "white",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
