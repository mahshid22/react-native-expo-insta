import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useTheme } from "@/utils/ThemeContext";

const SettingPage = () => {
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  const { background, text, accent } = theme.colors;
  return (
    <SafeAreaView
      style={{
        backgroundColor: background,
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color={text} />
          </TouchableOpacity>
          <Text style={[styles.headerText, { color: text }]}>
            Settings and activity
          </Text>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <TextInput
          placeholder="search settings"
          placeholderTextColor={text}
          style={[styles.textInput, { backgroundColor: accent }]}
        />
        <View style={{ marginTop: 16 }}>
          <Text style={styles.boxHeaderText}>Your Account</Text>
          <TouchableOpacity style={styles.InfoContainer}>
            <MaterialIcons name="account-circle" size={32} color={text} />
            <View>
              <Text style={[styles.boxText, { color: text }]}>
                Account Center
              </Text>
              <Text
                style={[styles.boxHeaderText, { maxWidth: 250, marginTop: 4 }]}
              >
                Password security, personal details and references
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.boxContainer, { borderColor: accent }]}>
          <Text style={styles.boxHeaderText}>Appearance</Text>
          <View style={styles.boxInfoContainer}>
            <TouchableOpacity
              style={styles.InfoContainer}
              onPress={setDarkTheme}
            >
              <MaterialIcons name="dark-mode" size={28} color={text} />
              <Text style={[styles.boxText, { color: text }]}>Dark Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.InfoContainer}
              onPress={setLightTheme}
            >
              <MaterialIcons name="light-mode" size={28} color={text} />
              <Text style={[styles.boxText, { color: text }]}>Light Mode</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.boxContainer, { borderColor: accent }]}>
          <Text style={{ color: text }}>How you use instagram?</Text>
          <View style={styles.boxInfoContainer}>
            <TouchableOpacity style={styles.InfoContainer}>
              <Feather name="bookmark" size={28} color={text} />
              <Text style={[styles.boxText, { color: text }]}>Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InfoContainer}>
              <Entypo name="back-in-time" size={28} color={text} />
              <Text style={[styles.boxText, { color: text }]}>Archeive</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InfoContainer}>
              <Feather name="activity" size={28} color={text} />
              <Text style={[styles.boxText, { color: text }]}>
                Your Activity
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.InfoContainer}>
              <Ionicons name="notifications-outline" size={28} color={text} />
              <Text style={[styles.boxText, { color: text }]}>
                Notifications
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.boxContainer, { borderColor: accent }]}>
          <Text style={{ color: text }}>Login</Text>
          <View style={styles.boxInfoContainer}>
            <TouchableOpacity>
              <Text style={{ color: "#00BFFF", fontSize: 16 }}>
                Add account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "red", fontSize: 16 }}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "red", fontSize: 16 }}>
                Log out all accounts
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingPage;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginVertical: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    fontSize: 16,
    borderRadius: 12,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 8,
  },
  boxContainer: {
    borderTopWidth: 3,
    paddingVertical: 16,
    marginTop: 16,
  },
  boxHeaderText: {
    color: "#999",
    marginBottom: 12,
  },
  boxInfoContainer: {
    gap: 18,
  },
  boxText: {
    color: "black",
    fontSize: 16,
  },
  InfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
});
