import { StyleSheet, Text, View } from "react-native";
import Selector from "./Selector";
import theme from "../../theme/theme";

export const Button = ({ label, icon, onClick, styleButton, styleLabel }) => {
  return (
    <Selector
      onPress={onClick}
      style={[styles.button, styleButton]}
      pressedStyle={styles.pressedButton}
    >
      {icon}
      <Text style={[styles.label, styleLabel]}>{label}</Text>
    </Selector>
  );
};

export const ButtonTray = ({ children }) => {
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },

  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: theme.borderRadius.medium,
    borderColor: theme.colors.buttonBorder,
    backgroundColor: theme.colors.button,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.sm,
    flexDirection: "row",
    gap: theme.spacing.xs,
    flex: 1,
  },

  label: {
    fontSize: theme.fonts.regular,
    color: theme.colors.textPrimary,
  },

  pressedButton: {
    backgroundColor: theme.colors.pressed,
    elevation: 3,
  },
});
