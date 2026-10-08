import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import EmptyState from "../../components/EmptyState";
import FilterChip from "../../components/FilterChip";

type AssignmentFilter = "Upcoming" | "Past due" | "Completed";

const filters: AssignmentFilter[] = ["Upcoming", "Past due", "Completed"];

const messages: Record<
  AssignmentFilter,
  { title: string; description: string }
> = {
  Upcoming: {
    title: "No upcoming assignments right now.",
    description:
      "Try navigating to the individual class team to check for more results.",
  },
  "Past due": {
    title: "No past due assignments.",
    description: "Any overdue assignments would appear here.",
  },
  Completed: {
    title: "No completed assignments yet.",
    description: "Completed assignments would appear here.",
  },
};

export default function AssignmentsScreen() {
  const [selectedFilter, setSelectedFilter] =
    useState<AssignmentFilter>("Upcoming");

  const message = messages[selectedFilter];

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
              onPress={() => setSelectedFilter(filter)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Scrolling keeps the content accessible on smaller screens. */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <EmptyState
          image={require("../../../assets/images/assignments-empty.png")}
          title={message.title}
          description={message.description}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  filterContainer: {
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#202020",
  },
  filterRow: {
    paddingHorizontal: 16,
    gap: 8,
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 40,
  },
});
