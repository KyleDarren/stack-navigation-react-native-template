import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import { useState } from "react";

const img_src = require("./assets/adaptive-icon.png");


export default function App() {
  const [txt_color, setColor] = useState("white");

  return (
    <View style={styles.container}>
      {/* <Image source={img_src} style={{ width: 100, height: 100}}/> */}
      <Image source={{ uri: "https://picsum.photos/200/300" }} style={{ height: 200, width: 300 }}/>
      <Text style={{ fontSize: 50 }}>
        <Text style={{ color: txt_color }}>B</Text>ud
        <Text style={{ color: txt_color }}>H</Text>ub
      </Text>
      <Button title="Start" onPress={() => setColor("black")} color="midnightblue"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fa0",
    alignItems: "center",
    justifyContent: "center",
  },
});
