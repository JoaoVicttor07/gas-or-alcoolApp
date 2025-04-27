import { Modal, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

interface ModalAreaProps {
  visible: boolean;
  onClose: () => void;
}

export default function ModalArea({ visible, onClose }: ModalAreaProps) {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.container}>
        <Image style={styles.img} source={require("../../src/images/gas.png")} />
        <View style={styles.area}>
          <Text style={styles.textAnswer}>Compensa usar Álcool</Text>

          <View style={styles.containerTexts}>
            <Text style={styles.textPrices}>Com os preços:</Text>
            <Text style={styles.prices}>Álcool: R$ 4.60</Text>
            <Text style={styles.prices}>Gasolina: R$ 7.60</Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={onClose}>
            <Text style={styles.btnText} >Calcular novamente</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}
