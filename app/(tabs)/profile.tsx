import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import User from "@/constants/User";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const ProfilePage = () => {
  const [active, setActive] = useState("posts");
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "white" }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.navContainer}>
          <View style={styles.username}>
            <Text style={[styles.usernameText, { color: "black" }]}>
              {User.username}
            </Text>
            <AntDesign name="down" size={16} color={"black"} />
          </View>
          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <FontAwesome6 name="threads" size={24} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="plussquareo" size={24} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(screens)/settings")}
            >
              <Feather name="menu" size={24} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
        {/* MENU CONTAINER */}


      </ScrollView>
      {/* POSTS */}
      {/* MENU CONTAINER */}
    </SafeAreaView>
  );
};

const UserPosts = ({ item }: { item: string }) => {
  return (
    <TouchableOpacity style={{ flex: 1, aspectRatio: 1 }}>
      <Image
        source={{ uri: item }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </TouchableOpacity>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  username: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menuContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  infoContainer: {
    marginTop: 24,
    marginBottom: 6,
    gap: 24,
    marginHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoDataContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
  },
  userImageContainer: {
    height: 90,
    width: 90,
    marginBottom: 8,
    backgroundColor: "#E3256B",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  infoValueText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userImage: {
    position: "absolute",
    height: 85,
    width: 85,
    borderRadius: 100,
    objectFit: "cover",
    borderWidth: 3,
  },
  dataContainer: {
    alignItems: "center",
  },
  threads: {
    backgroundColor: "#333",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginBottom: 2,
  },
  bio: {
    color: "white",
    maxWidth: 250,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 6,
    marginVertical: 16,
    gap: 6,
  },
  buttonText: {
    backgroundColor: "#222",
    flex: 1,
    borderRadius: 8,
    paddingVertical: 6,
  },
  addButton: {
    backgroundColor: "#222",
    paddingHorizontal: 6,
    borderRadius: 8,
    paddingVertical: 6,
  },
  highlightContainer: {
    flexDirection: "row",
    gap: 24,
    marginTop: 8,
    marginBottom: 16,
  },
  postsNav: {
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: "white",
  },
});
