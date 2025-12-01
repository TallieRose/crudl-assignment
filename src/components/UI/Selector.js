import { Pressable, Vibration } from "react-native";
import theme from "../../theme/theme";

const Selector = ({ children, onPress, style, pressedStyle }) => {
  const handlePress = () => {
    Vibration.vibrate(5);
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        style,
        pressed ? pressedStyle || { backgroundColor: theme.colors.pressed } : null,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default Selector;
