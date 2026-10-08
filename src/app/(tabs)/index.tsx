import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

import ActivityRow from "../../components/ActivityRow";
import FilterChip from "../../components/FilterChip";
import { initialActivities } from "../../data/activities";

type ActivityFilter = "Unread" | "@Mentions" | "Replies" | "Reactions";

const filters: ActivityFilter[] = [
  "Unread",
  "@Mentions",
  "Replies",
  "Reactions",
];

export default function ActivityScreen() {
  const [activities, setActivities] = useState(initialActivities);
  const [selectedFilter, setSelectedFilter] = useState<ActivityFilter | null>(
    null,
  );

  // Selecting the active filter again returns to the full list.
  function toggleFilter(filter: ActivityFilter) {
    setSelectedFilter((current) => (current === filter ? null : filter));
  }

  function markAsRead(id: string) {
    setActivities((current) =>
      current.map((item) =>
        item.id === id ? { ...item, unread: false } : item,
      ),
    );
  }

  const visibleActivities = activities.filter((item) => {
    switch (selectedFilter) {
      case "Unread":
        return item.unread;
      case "@Mentions":
        return item.type === "mention";
      case "Replies":
        return item.type === "reply";
      case "Reactions":
        return item.type === "reaction";
      default:
        return true;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {filters.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onPress={() => toggleFilter(filter)}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        style={styles.list}
        data={visibleActivities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ActivityRow item={item} onPress={() => markAsRead(item.id)} />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>You’re all caught up</Text>
            <Text style={styles.emptyDescription}>
              No notifications match this filter.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  filterContainer: {
    backgroundColor: "#141414",
    paddingBottom: 10,
  },
  filterRow: {
    paddingHorizontal: 16,
    gap: 8,
    alignItems: "center",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  emptyContainer: {
    padding: 32,
    alignItems: "center",
    gap: 8,
  },
  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
  },
  emptyDescription: {
    color: "#969696",
    fontSize: 15,
    textAlign: "center",
  },
});