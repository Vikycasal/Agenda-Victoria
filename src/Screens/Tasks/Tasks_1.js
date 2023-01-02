//crear nueva tarea
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
//componentes
import { Navbar } from "../../Components/Navbar/Navbar";

export function Tasks_1() {
  //para crear una tarea lo primero que tengo que hacer es hacer 1 constante con los campos a llenar
  const [input, setInput] = useState({
    title: "",
    description: "",
    date: "",
  });

  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Agregar nueva tarea</Text>
      <Text style={globalStyles.subtitleText}>
        <MaterialCommunityIcons
          name="home-lightning-bolt"
          size={24}
          color="pink"
          style={globalStyles.taskHouseIcon}
        />
        Tareas de la Casa
      </Text>
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
      <Text style={globalStyles.textTaskForm}>Agregar fecha</Text>
      <TextInput
        placeholder="Agrega aqui la fecha"
        style={globalStyles.textInputTaskForm}
      />
      <TouchableOpacity style={globalStyles.buttonTask}>
        <Text style={globalStyles.buttonText}>Confirmar tarea</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.buttonTask}>
        <Text style={globalStyles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
