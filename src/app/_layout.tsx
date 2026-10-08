import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#141414" },
          headerTintColor: "#FFFFFF",
          contentStyle: { backgroundColor: "#000000" },
        }}
      >
        {/* The tab navigator provides its own screen headers. */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="conversation" options={{ title: "Conversation" }} />
      </Stack>
    </>
  );
}
