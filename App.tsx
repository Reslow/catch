import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Constants from "./Constants";

export default function App() {
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;

  const engine = useRef(null);

  return (
    <View style={styles.canvas}>
      <GameEngine
        ref={engine}
        style={{ width: BoardSize, height: BoardSize }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
