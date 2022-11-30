import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Notes() {
  //constangtes
  const navigation = useNavigation();

  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Mis Notas</Text>
      <Text style={globalStyles.subtitleText}>
        Agregar nueva nota
        <MaterialCommunityIcons
          name="plus"
          size={24}
          color="pink"
          style={globalStyles.plusIcon}
          onPress={() => navigation.navigate("notes_1")}
        />
      </Text>
      <Text style={globalStyles.subtitleText}>
        Este es el titulo de una nota
      </Text>
      <View>
        <Text>Aqui va la nota</Text>
      </View>
    </View>
  );
}
