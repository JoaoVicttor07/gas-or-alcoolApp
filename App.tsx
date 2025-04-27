import React, { use, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Input from "./components/input";
import Button from "./components/button";
import Modal from "./components/modal"

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')

  function handleCalcular() {
    setModalVisible(true)
  }

  function handleFecharModal() {
    setModalVisible(false)
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

        <Modal visible={modalVisible} onClose={handleFecharModal} />
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
