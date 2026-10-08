import { Pressable, StyleSheet, Text, View } from "react-native";

import type { ChatItem } from "../data/chats";
import Avatar from "./Avatar";

type ChatRowProps = {
  item: ChatItem;
  onPress: () => void;
};

export default function ChatRow({ item, onPress }: ChatRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${item.title}. ${
        item.unread ? "Unread messages." : ""
      } ${item.preview}`}
      accessibilityHint="Opens this conversation"
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      {item.unread && <View style={styles.unreadDot} />}

      <Avatar
        initials={item.initials}
        backgroundColor={item.avatarColor}
        textColor="#26394A"
        size={44}
      />

      <View style={styles.content}>
        <View style={styles.headingRow}>
          <Text
            numberOfLines={1}
            style={[styles.title, item.unread && styles.unreadTitle]}
          >
            {item.title}
          </Text>

          <Text style={styles.time}>{item.time}</Text>
        </View>

        <Text numberOfLines={1} style={styles.preview}>
          {item.preview}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  pressed: {
    backgroundColor: "#161616",
  },
  unreadDot: {
    position: "absolute",
    left: 3,
    top: 30,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8581F5",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    flex: 1,
    color: "#DADADA",
    fontSize: 17,
  },
  unreadTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  time: {
    color: "#888888",
    fontSize: 12,
  },
  preview: {
    color: "#969696",
    fontSize: 16,
  },
});
