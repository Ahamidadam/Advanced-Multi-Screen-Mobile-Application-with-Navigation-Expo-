import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type ScreenPlaceholderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function ScreenPlaceholder({
  description,
  children,
}: ScreenPlaceholderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 24,
  },
  content: {
    gap: 16,
  },
  description: {
    color: "#A0A0A0",
    fontSize: 16,
    lineHeight: 24,
  },
});
