import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { PostType } from "@/constants/posts";
import { useTheme } from "@/utils/ThemeContext";
import { Entypo } from "@expo/vector-icons";
import ImageContainer from "./ImageContainer";

const PostCard = ({ item, index }: { item: PostType; index: number }) => {
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const onViewableItemsChanged = useRef((item: any) => {
    const index = item.viewableItems[0].index;
    setCurrentSlideIndex(index);
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });
  return (
    <View>
      {item.images.length > 0 && (
        <View style={styles.userContainer}>
          <TouchableOpacity style={styles.userBox}>
            <Image
              source={{ uri: item.user.avatar_url }}
              width={32}
              height={32}
              style={{ borderRadius: 100, resizeMode: "cover" }}
            />
            <Text style={{ color: text }}>{item.user.username}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={18} color={text} />
          </TouchableOpacity>
        </View>
      )}
      <View>
        <View>
          {item.images.length > 0 ? (
            <ImageContainer
              item={item}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
            />
          ) : (
            <Text> hello </Text>
          )}
            {item.images.length > 1 && (
            <View
              style={{
                position: "absolute",
                right: 16,
                top: 16,
                zIndex: 10,
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 16,
                backgroundColor: background,
              }}
            >
              <Text style={{ color: text, fontSize: 12 }}>
                {currentSlideIndex + 1}/{item.images.length}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginBottom: 6,
  },
  userBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    paddingVertical: 4,
  },
});
