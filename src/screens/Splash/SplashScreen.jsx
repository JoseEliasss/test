import React from "react";
import { View, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={require("../../../assets/icons/cookie100.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2cd18a",
  },
  photo: {
    flex: 1,
  },
});
