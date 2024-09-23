import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useTheme } from "@/utils/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import User from "@/constants/User";
import { router } from "expo-router";
import messages, { MessageType } from "@/constants/Messsages";
import SingleStory from "@/components/home/SingleStory";

const MessagePage = () => {
  const { theme } = useTheme();
  const { background, text, accent, accentText } = theme.colors;
  const SingleMessage = ({ item }: { item: MessageType }) => {
    return (
      <TouchableOpacity style={styles.chantContainer}>
        <View style={styles.chatImageContainer}>
          <Image
            source={{ uri: item.image_url }}
            style={{ backgroundColor: "black", borderRadius: 100 }}
            width={55}
            height={55}
          />
          <View>
            <Text style={{ color: text }}>
              {item.message.length <= 35
                ? item.message
                : `${item.message.slice(0, 35)}`}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="camera" size={24} color="gray" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
      <View style={styles.navContainer}>
        <View style={styles.username}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color={text} />
          </TouchableOpacity>
          <Text style={[styles.usernameText, { color: text }]}>
            {User.name}
          </Text>
          <AntDesign name="down" size={16} color={text} />
        </View>
        <TouchableOpacity>
          <Feather name="edit" size={24} color={text} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TextInput
          placeholder="ask meta or search"
          style={[styles.textInput, { color: text, backgroundColor: accent }]}
          placeholderTextColor={text}
        />
        <View style={{ paddingHorizontal: 12, marginVertical: 28 }}>
          <FlatList
            data={messages}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 16,
            }}
            renderItem={({ item }) => (
              <SingleStory
                imageUrl={item.image_url}
                size={80}
                text={item.name}
                active={false}
              />
            )}
          />
        </View>
        <View style={{ paddingHorizontal: 12, marginVertical: 28 }}>
          <View style={styles.messagesHeader}>
            <Text style={[styles.messagesHeaderText, { color: text }]}>
              Messages
            </Text>
            <TouchableOpacity>
              <Text style={[styles.messagesHeaderText, { color: text }]}>
                Request
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={messages}
            scrollEnabled={false}
            contentContainerStyle={{
              gap: 28,
            }}
            renderItem={({ item }) => <SingleMessage item={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessagePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  usernameText: {
    fontSize: 20,
    marginLeft: 12,
    fontWeight: "bold",
  },
  textInput: {
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: 12,
    fontSize: 16,
  },
  messagesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  messagesHeaderText: {
    color: "white",
    fontSize: 16
  },
  chantContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  chatImageContainer:{
    flexDirection: "row",
    gap:16,
    alignItems: "center"
  }
});
