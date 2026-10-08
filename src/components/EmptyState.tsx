import type { ImageSourcePropType } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native";

type EmptyStateProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

export default function EmptyState({
  image,
  title,
  description,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode="contain"
        style={styles.image}
        accessible={false}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 28,
    width: "100%",
    maxWidth: 420,
  },
  image: {
    width: "80%",
    maxWidth: 260,
    height: 220,
  },
  content: {
    alignItems: "center",
    gap: 18,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    color: "#DDDDDD",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});
