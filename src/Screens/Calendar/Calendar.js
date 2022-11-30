import React from "react";
import { View, Text } from "react-native";
//components
import { Navbar } from "../../Components/Navbar/Navbar";

export function Calendar() {
  return (
    <View>
      <Navbar />
      <Text>Aca vamos a poner el calendario</Text>
      <Text>
        Vamos a hacer un calendario como el de google para agregar cosas y que
        queden ahi
      </Text>
    </View>
  );
}
