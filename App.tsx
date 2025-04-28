import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";

import Input from "./components/input";
import Button from "./components/button";
import Modal from "./components/modal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [melhorEscolha, setMelhorEscolha] = useState("");
  const [valorAlcool, setValorAlcool] = useState(0);
  const [valorGasolina, setValorGasolina] = useState(0);

  function handleCalcular() {
    const valorAlcoolNum = parseFloat(alcool.replace(",", "."));
    const valorGasolinaNum = parseFloat(gasolina.replace(",", "."));

    if (isNaN(valorAlcool) || isNaN(valorGasolina)) {
      Alert.alert("Digite valores válidos para ambos os campos!");
      return;
    }

    const resultado = valorAlcool / valorGasolina;

    setValorAlcool(valorAlcoolNum)
    setValorGasolina(valorGasolinaNum)

    if (resultado < 0.7) {
      setMelhorEscolha('Álcool')
    } else {
      setMelhorEscolha('Gasolina')
    }
    setModalVisible(true)
  }

  function handleFecharModal() {
    setAlcool("")
    setGasolina("")
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image source={require("./src/images/logo.png")} />
        <Text style={styles.textOption}>Qual a melhor opção?</Text>
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.textDescribe}>Álcool (preço por litro):</Text>

        <Input value={alcool} onChangeText={setAlcool} />

        <Text style={styles.textDescribe}>Gasolina (preço por litro):</Text>

        <Input value={gasolina} onChangeText={setGasolina} />

        <Button onPress={handleCalcular} />

        <Modal 
        visible={modalVisible} 
        onClose={handleFecharModal}
        melhorEscolha={melhorEscolha}
        valorAlcool={valorAlcool}
        valorGasolina={valorGasolina} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    padding: 15,
  },
  logoArea: {
    alignItems: "center",
    marginTop: 50,
    gap: 20,
  },
  textOption: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  inputArea: {
    marginTop: 60,
    gap: 7,
  },
  textDescribe: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
