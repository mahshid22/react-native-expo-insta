import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { PostType } from "@/constants/posts";
import { useTheme } from "@/utils/ThemeContext";
import { Entypo, Feather, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import ImageContainer from "./ImageContainer";
import { router } from "expo-router";
import VideoContainer from "./VideoContainer";

const PostCard = ({ item, index , visibleVideoIndex}: { item: PostType; index: number, visibleVideoIndex: number| null}) => {
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const onViewableItemsChanged = useRef((item: any) => {
    const index = item.viewableItems[0].index;
    setCurrentSlideIndex(index);
  });
  const [activeLike, setActiveLike] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);
  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  });
  const pause = index ===visibleVideoIndex
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
            <VideoContainer items={item} index={index} pause={pause} visibleVideoIndex={visibleVideoIndex} />
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
      <View  style={styles.iconContainer}>
        <View
          style={{
            position: "absolute",
            left: "50%",
            flexDirection: "row",
            gap: 4,
          }}
        >
             {item.images.length > 1 &&
            item.images.map((_, index) => {
              const color = currentSlideIndex === index ? "#00BFFF" : "gray";
              return (
                <View
                  key={index}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 100,
                    backgroundColor: color,
                  }}
                />
              );
            })}
        </View>
        <View style={styles.likeBox}>
          <TouchableOpacity onPress={() => setActiveLike(!activeLike)}>
            {activeLike ? (
              <FontAwesome name="heart" size={24} color="red" />
            ) : (
              <FontAwesome name="heart-o" size={24} color={text} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Comments")}>
            <FontAwesome6 name="comment" size={24} color={text} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="send" size={24} color={text} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setActiveBookmark(!activeBookmark)}>
          {activeBookmark ? (
            <FontAwesome name="bookmark" size={24} color={text} />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color={text} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.captionContainer}>
        <Text style={{ color: text }}>{item.likes} likes</Text>
        <Text style={{ color: text }}>
          <Text style={{ fontWeight: "bold" }}>{item.user.username}</Text>{" "}
          {item.caption}
        </Text>
        <TouchableOpacity
          style={{ marginTop: 6 }}
          onPress={() => router.push("/Comments")}
        >
          <Text style={{ color: "gray" }}>View all comments</Text>
        </TouchableOpacity>
        <Text style={{ color: "gray", fontSize: 12, marginTop: 2 }}>
          28 May, 2019
        </Text>
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
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  likeBox:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  captionContainer: {
    paddingHorizontal: 12,
  },
});
