import { StyleSheet, Text, View, Image } from "react-native";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 100, height: 100 }} />
      <Text style={styles.fontStyle}>Welome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fontStyle: {
    color: "#923",
    fontSize: 24,
    fontWeight: "bold",
  },
});
