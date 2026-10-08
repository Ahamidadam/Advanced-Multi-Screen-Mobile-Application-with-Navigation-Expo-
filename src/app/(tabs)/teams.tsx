import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import TeamCard from "../../components/TeamCard";
import { teams } from "../../data/teams";

export default function TeamsScreen() {
  const [expanded, setExpanded] = useState(true);

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Classes"
        accessibilityState={{ expanded }}
        onPress={() => setExpanded((current) => !current)}
        style={({ pressed }) => [
          styles.sectionHeading,
          pressed && styles.pressed,
        ]}
      >
        <Ionicons
          name={expanded ? "chevron-down" : "chevron-forward"}
          size={18}
          color="#D0D0D0"
        />

        <Text style={styles.sectionTitle}>Classes</Text>
      </Pressable>

      {expanded && (
        <FlatList
          style={styles.list}
          data={teams}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => <TeamCard item={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  sectionTitle: {
    color: "#F0F0F0",
    fontSize: 20,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.7,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
    gap: 16,
  },
});
