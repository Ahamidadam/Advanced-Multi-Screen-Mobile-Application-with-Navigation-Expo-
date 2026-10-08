import { Pressable, StyleSheet, Text } from "react-native";

type FilterChipProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function FilterChip({
  label,
  selected,
  onPress,
}: FilterChipProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        selected && styles.selected,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, selected && styles.selectedLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    borderColor: "#303030",
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  selected: {
    backgroundColor: "#514CB1",
    borderColor: "#8581F5",
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    color: "#D0D0D0",
    fontSize: 16,
  },
  selectedLabel: {
    color: "#FFFFFF",
  },
});
