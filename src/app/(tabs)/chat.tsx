import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

import ScreenPlaceholder from "../../components/ScreenPlaceholder";

export default function ChatScreen() {
  function openConversation() {
    router.push({
      pathname: "/conversation",
      params: {
        chatId: "sadt-network",
        title: "SADT network",
      },
    });
  }

  return (
    <ScreenPlaceholder
      title="Chat"
      description="Your favourites and recent conversations will appear here."
    >
      <Pressable
        accessibilityRole="button"
        onPress={openConversation}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Open SADT network</Text>
      </Pressable>
    </ScreenPlaceholder>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#8581F5",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
});
