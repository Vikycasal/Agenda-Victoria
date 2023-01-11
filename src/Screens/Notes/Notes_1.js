import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../constant/api.constant";

export function Notes_1() {
  //constantes
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //notas
  const notes = useSelector((state) => state.notes.notes);

  //para crear una nota primero le paso los campos a completar
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (notes) {
      const { title, description } = notes;
      setInput({
        ...input,
        title,
        description,
      });
    }
  }, [notes]);

  const handleInput = (type, value) => {
    setInput({
      ...input,
      [type]: value,
    });
  };

  //ahora hago la funcion de creacion de la nota,
  //donde la guardo en la ruta de creacion
  const createNote = async () => {
    try {
      const res = await axios.post(`${API_URL}/notes`, input);
      console.log(res.data);
      if (res.status === 200) {
        dispatch(getNotes());
      }
    } catch (error) {
      console.log(error.response.data, "Error de creación de tarea");
    }
  };

  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Agregar Nota</Text>
      <Text style={globalStyles.textTaskForm}>Agregar título</Text>
      <TextInput
        value={input.title}
        placeholder="Agrega aqui tu título"
        style={globalStyles.textInputTaskForm}
        onChangeText={(value) => handleInput("title", value)}
      />
      <Text style={globalStyles.textTaskForm}>Agregar descripción</Text>
      <TextInput
        value={input.description}
        placeholder="Agrega aqui tu descripción"
        style={globalStyles.textInputTaskForm}
        onChangeText={(value) => handleInput("description", value)}
      />
      <TouchableOpacity style={globalStyles.buttonTask} onPress={createNote}>
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
