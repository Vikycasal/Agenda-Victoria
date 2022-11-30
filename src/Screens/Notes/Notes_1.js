import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { useNavigation } from "@react-navigation/native";

export function Notes_1() {
  //constantes
  const navigation = useNavigation();

  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Agregar Nota</Text>
      <Text style={globalStyles.textTaskForm}>Agregar título</Text>
      <TextInput
        placeholder="Agrega aqui tu título"
        style={globalStyles.textInputTaskForm}
      />
      <Text style={globalStyles.textTaskForm}>Agregar descripción</Text>
      <TextInput
        placeholder="Agrega aqui tu descripción"
        style={globalStyles.textInputTaskForm}
      />
      <TouchableOpacity
        style={globalStyles.buttonTask}
        onPress={() => navigation.navigate("notes")}
      >
        <Text style={globalStyles.buttonText}>Confirmar nota</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.buttonTask}
        onPress={() => navigation.navigate("notes")}
      >
        <Text style={globalStyles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
