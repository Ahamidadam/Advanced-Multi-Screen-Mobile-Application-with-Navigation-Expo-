import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Avatar from "./Avatar";

type TeamsHeaderProps = {
  title: string;
};

export default function TeamsHeader({ title }: TeamsHeaderProps) {
  const isAssignments = title === "Assignments";
  const isTeams = title === "Teams";

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <View style={styles.row}>
        <View style={styles.identity}>
          <Avatar initials="AA" size={34} />

          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.8}
            style={styles.title}
          >
            {title}
          </Text>
        </View>

        <View style={styles.actions}>
          {isAssignments ? (
            <Ionicons name="filter-outline" size={25} color="#F5F5F5" />
          ) : (
            <>
              <Ionicons
                name={isTeams ? "menu-outline" : "search-outline"}
                size={27}
                color="#F5F5F5"
              />

              <Ionicons name="ellipsis-horizontal" size={25} color="#F5F5F5" />
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    gap: 16,
  },
  identity: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    flexShrink: 1,
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },
});
