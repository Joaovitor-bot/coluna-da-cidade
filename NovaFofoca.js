import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NovaFofoca() {
  const [texto, setTexto] = useState("");
  const [fofocas, setFofocas] = useState([]);

  useEffect(() => {
    carregarFofocas();
  }, []);

  async function carregarFofocas() {
    const salvas = await AsyncStorage.getItem("fofocas");
    if (salvas) setFofocas(JSON.parse(salvas));
  }

  async function adicionarFofoca() {
    if (texto.trim() === "") return;

    const nova = [{ id: Date.now().toString(), texto }, ...fofocas];
    setFofocas(nova);
    setTexto("");
    await AsyncStorage.setItem("fofocas", JSON.stringify(nova)); // salva localmente
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>💄 Escreva sua Fofoca</Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite sua fofoca aqui..."
        value={texto}
        onChangeText={setTexto}
      />

      <TouchableOpacity style={estilos.botao} onPress={adicionarFofoca}>
        <Text style={estilos.textoBotao}>Postar Fofoca 💅</Text>
      </TouchableOpacity>
      <FlatList
        data={fofocas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.cartao}>
            <Text style={estilos.textoFofoca}>{item.texto}</Text>
          </View>
        )}
      />
    </View>
  );
}// FlatList exibe todas as fofocas em cartões scrolláveis

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d63384",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#f8bbd0",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#d63384",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cartao: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f8bbd0",
  },
  textoFofoca: {
    fontSize: 16,
    color: "#212529",
  },
});
