import { StyleSheet, Text, View } from "react-native";

import type { TeamItem } from "../data/teams";

type TeamCardProps = {
  item: TeamItem;
};

export default function TeamCard({ item }: TeamCardProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.iconText}>{item.initials}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.instructor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#282828",
    borderRadius: 14,
    padding: 12,
    minHeight: 88,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "400",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: "#F0F0F0",
    fontSize: 18,
    fontWeight: "700",
  },
  subtitle: {
    color: "#969696",
    fontSize: 14,
  },
});
