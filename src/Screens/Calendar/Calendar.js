import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
import Calendario from "./Calendario";

export function Calendar() {
  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Calendario</Text>
      <Calendario />
    </View>
  );
}
