import { StyleSheet, Text, View } from "react-native";

type AvatarProps = {
  initials: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
};

export default function Avatar({
  initials,
  size = 44,
  backgroundColor = "#EACADD",
  textColor = "#54213F",
}: AvatarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: textColor,
            fontSize: size * 0.38,
          },
        ]}
      >
        {initials}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  label: {
    fontWeight: "500",
  },
});
