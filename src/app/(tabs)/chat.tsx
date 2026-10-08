import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import ChatRow from "../../components/ChatRow";
import FilterChip from "../../components/FilterChip";
import type { ChatItem } from "../../data/chats";
import { initialChats } from "../../data/chats";

type ChatFilter = "Recent" | "Unread" | "Mentions";

type SectionHeadingProps = {
  title: string;
  expanded: boolean;
  onPress: () => void;
};

const filters: ChatFilter[] = ["Recent", "Unread", "Mentions"];

// This small component is only used by the Chat screen.
function SectionHeading({ title, expanded, onPress }: SectionHeadingProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ expanded }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.sectionHeading,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons
        name={expanded ? "chevron-down" : "chevron-forward"}
        size={16}
        color="#888888"
      />

      <Text style={styles.sectionTitle}>{title}</Text>
    </Pressable>
  );
}

export default function ChatScreen() {
  const [selectedFilter, setSelectedFilter] = useState<ChatFilter>("Recent");
  const [favouritesExpanded, setFavouritesExpanded] = useState(true);
  const [chatsExpanded, setChatsExpanded] = useState(true);

  // Filters use the sample data without changing its read status.
  const filteredChats = initialChats.filter((item) => {
    if (selectedFilter === "Unread") {
      return item.unread;
    }

    if (selectedFilter === "Mentions") {
      return item.mentioned;
    }

    return true;
  });

  const favourites = filteredChats.filter((item) => item.isFavourite);
  const conversations = filteredChats.filter((item) => !item.isFavourite);

  function openConversation(item: ChatItem) {
    router.push({
      pathname: "/conversation",
      params: {
        chatId: item.id,
        title: item.title,
      },
    });
  }

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

      <FlatList
        style={styles.list}
        data={chatsExpanded ? conversations : []}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <>
            <SectionHeading
              title="Favorites"
              expanded={favouritesExpanded}
              onPress={() => setFavouritesExpanded((current) => !current)}
            />

            {favouritesExpanded &&
              (favourites.length > 0 ? (
                favourites.map((item) => (
                  <ChatRow
                    key={item.id}
                    item={item}
                    onPress={() => openConversation(item)}
                  />
                ))
              ) : (
                <Text style={styles.emptyText}>
                  No favourites match this filter.
                </Text>
              ))}

            <SectionHeading
              title="Chats"
              expanded={chatsExpanded}
              onPress={() => setChatsExpanded((current) => !current)}
            />
          </>
        }
        renderItem={({ item }) => (
          <ChatRow item={item} onPress={() => openConversation(item)} />
        )}
        ListEmptyComponent={
          chatsExpanded ? (
            <Text style={styles.emptyText}>No chats match this filter.</Text>
          ) : null
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
    paddingBottom: 12,
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
    paddingBottom: 20,
  },
  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  sectionTitle: {
    color: "#C7C7C7",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  emptyText: {
    color: "#888888",
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
