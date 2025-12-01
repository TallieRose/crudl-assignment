import { Text, StyleSheet } from "react-native";
import Selector from "./Selector";
import Icons from "./Icons";
import theme from "../../theme/theme";

const Favourite = ({ isFavourite, onSelect }) => {
  return (
    <Selector onPress={onSelect} style={styles.wrap}>
      <Text style={styles.icon}>
        {isFavourite ? <Icons.Favourite /> : <Icons.Notfavourite />}
      </Text>
    </Selector>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: theme.spacing.xs,
  },
  icon: {
    color: theme.colors.textPrimary,
  },
});

export default Favourite;
