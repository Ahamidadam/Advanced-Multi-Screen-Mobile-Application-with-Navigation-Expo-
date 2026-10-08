import Ionicons from "@expo/vector-icons/Ionicons";
import type { ComponentProps } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import type { ActivityItem, ActivityType } from "../data/activities";
import Avatar from "./Avatar";

type ActivityRowProps = {
  item: ActivityItem;
  onPress: () => void;
};

type IconName = ComponentProps<typeof Ionicons>["name"];

const badgeIcons: Record<ActivityType, IconName> = {
  mention: "at",
  reply: "chatbubble",
  reaction: "thumbs-up",
};

export default function ActivityRow({ item, onPress }: ActivityRowProps) {
  const isReaction = item.type === "reaction";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${item.title}. ${item.preview}. ${
        item.unread ? "Unread" : "Read"
      }`}
      accessibilityHint="Marks this notification as read"
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      {item.unread && <View style={styles.unreadDot} />}

      <View style={styles.avatarContainer}>
        <Avatar
          initials={item.initials}
          backgroundColor={item.avatarColor}
          textColor="#26394A"
          size={44}
        />

        <View style={[styles.badge, isReaction && styles.reactionBadge]}>
          <Ionicons name={badgeIcons[item.type]} size={15} color="#000000" />
        </View>
      </View>

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

        <Text numberOfLines={1} style={styles.source}>
          {item.source}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  pressed: {
    backgroundColor: "#161616",
  },
  unreadDot: {
    position: "absolute",
    left: 3,
    top: 32,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8581F5",
  },
  avatarContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -4,
    bottom: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
    backgroundColor: "#D9513D",
    alignItems: "center",
    justifyContent: "center",
  },
  reactionBadge: {
    backgroundColor: "#FFD449",
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
  source: {
    color: "#888888",
    fontSize: 13,
  },
});
