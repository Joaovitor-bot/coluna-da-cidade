import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: "https://m.media-amazon.com/images/M/MV5BNjMwNzczODYtZDQwZC00NjJmLTg5ZWYtYzUxZjViYmNhN2IyXkEyXkFqcGc@._V1_.jpg" }} 
      style={styles.container}
      imageStyle={{ opacity: 0.25 }} 
    >
      <Text style={styles.title}>💋Coluna da Cidade💋</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("NovaFofoca")}>
        <Text style={styles.buttonText}>Escrever Fofoca 💅</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TelaSobre")}>
        <Text style={styles.buttonText}>Sobre a Coluna 💋</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#e91e63",
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: "rgba(255, 192, 203, 0.9)",
    padding: 15,
    borderRadius: 12,
    width: "70%",
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
});
