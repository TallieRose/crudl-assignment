import { StyleSheet, View } from "react-native";
import theme from "../../theme/theme";

const Screen = ({ children }) => {
  return <View style={styles.screen}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
  },
});

export default Screen;
