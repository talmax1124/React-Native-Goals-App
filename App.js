// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={{padding:  50}}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>
        <TextInput placeholder="Tell Me A Goal" style={{borderBottomColor: "black", borderWidth: "1px", padding: 15}} />
        <Button title="Add" />
      </View>
      <View></View>
    </View>
  );
}

// const styles = StyleSheet.create({

// });
