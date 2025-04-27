import { TouchableOpacity, Text, View } from "react-native";
import styles from "./style";

interface ModalAreaProps {
  onPress: () => void;
}

export default function Button({onPress}: ModalAreaProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}
