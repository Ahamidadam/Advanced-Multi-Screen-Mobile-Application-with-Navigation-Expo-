import { Stack, useLocalSearchParams } from "expo-router";

import ScreenPlaceholder from "../components/ScreenPlaceholder";

export default function ConversationScreen() {
  const { title, chatId } = useLocalSearchParams<{
    title?: string;
    chatId?: string;
  }>();

  const conversationTitle = title || "Conversation";

  return (
    <>
      <Stack.Screen options={{ title: conversationTitle }} />

      <ScreenPlaceholder
        title={conversationTitle}
        description={
          chatId
            ? `Messages for ${conversationTitle} will appear here.`
            : "Open a conversation from the Chat tab."
        }
      />
    </>
  );
}
