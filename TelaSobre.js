// Tela que apresenta informações sobre o app
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TelaSobre({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Sobre a Coluna 💋</Text>

      <Text style={estilos.texto}>
        O aplicativo “Coluna da Cidade” foi inspirado no universo glamuroso de
        Sex and the City. A ideia é criar um espaço divertido onde as pessoas
        possam compartilhar histórias, curiosidades e fofocas — tudo de forma
        leve e anônima.
      </Text>

      <Text style={estilos.texto}>
        Projeto desenvolvido com React Native e Expo, unindo humor, design e
        tecnologia. 💄
      </Text>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={estilos.textoBotao}>⬅️ Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0f6",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#d63384",
    marginBottom: 20,
    textAlign: "center",
  },
  texto: {
    fontSize: 16,
    color: "#444",
    marginBottom: 15,
    textAlign: "justify",
  },
  botao: {
    backgroundColor: "#d63384",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    marginTop: 20,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});