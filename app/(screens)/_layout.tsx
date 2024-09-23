import { ThemeProvider } from "@/utils/ThemeContext";
import { Stack } from "expo-router";

export default function ScreenLayout() {
  return (
    <Stack
    screenOptions={{headerShown: false, statusBarColor: "black"}}>
      <Stack.Screen name="Notifications" options={{presentation : "fullScreenModal"}}/>
      <Stack.Screen name="messages" options={{presentation : "fullScreenModal"}}/>
    </Stack>
  );
}
