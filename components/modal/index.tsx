import { Modal, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";

interface ModalAreaProps {
  visible: boolean;
  onClose: () => void
  melhorEscolha: String
  valorAlcool: number
  valorGasolina: number;
}

export default function ModalArea({ visible, onClose, melhorEscolha, valorAlcool, valorGasolina }: ModalAreaProps) {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.container}>
        <Image style={styles.img} source={require("../../src/images/gas.png")} />
        <View style={styles.area}>
          <Text style={styles.textAnswer}>Compensa usar {melhorEscolha}</Text>

          <View style={styles.containerTexts}>
            <Text style={styles.textPrices}>Com os preços:</Text>
            <Text style={styles.prices}>Álcool: R$ {valorAlcool.toFixed(2)}</Text>
            <Text style={styles.prices}>Gasolina: R$ {valorGasolina.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={onClose}>
            <Text style={styles.btnText} >Calcular novamente</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}
