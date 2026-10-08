import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import type { ComponentProps } from "react";
import TeamsHeader from "../../components/TeamsHeader";

type IconName = ComponentProps<typeof Ionicons>["name"];

const tabIcons: Record<string, { active: IconName; inactive: IconName }> = {
  index: {
    active: "notifications",
    inactive: "notifications-outline",
  },
  chat: {
    active: "chatbubble-ellipses",
    inactive: "chatbubble-ellipses-outline",
  },
  teams: {
    active: "people",
    inactive: "people-outline",
  },
  assignments: {
    active: "briefcase",
    inactive: "briefcase-outline",
  },
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        header: ({ options }) => (
          <TeamsHeader title={options.title ?? route.name} />
        ),
        headerStyle: { backgroundColor: "#141414" },
        headerTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#8581F5",
        tabBarInactiveTintColor: "#C7C7C7",
        tabBarStyle: {
          backgroundColor: "#141414",
          borderTopColor: "#292929",
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
        tabBarIcon: ({ focused, color, size }) => {
          const icons = tabIcons[route.name];

          return (
            <Ionicons
              name={
                icons
                  ? focused
                    ? icons.active
                    : icons.inactive
                  : "ellipse-outline"
              }
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Activity" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="teams" options={{ title: "Teams" }} />
      <Tabs.Screen name="assignments" options={{ title: "Assignments" }} />
    </Tabs>
  );
}
