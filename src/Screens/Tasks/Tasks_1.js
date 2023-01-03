//crear nueva tarea
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
//componentes
import { Navbar } from "../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
//api
import { API_URL } from "../../constant/api.constant";
import { getTasks } from "../../store/actions/tasks.actions";
import { setTasks } from "../../store/reducers/tasks.reducer";

export function Tasks_1() {
  //constantes
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const tasks = useSelector((state) => state.tasks.tasks);
  //para crear una tarea lo primero que tengo que hacer es hacer 1 constante con los campos a llenar
  const [input, setInput] = useState({
    title: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (tasks) {
      const { title, description, date } = tasks;
      setInput({
        ...input,
        title,
        description,
        date,
      });
    }
  }, [tasks]);

  //constante para enviar a la api la creacion de la tarea
  const createTasks = async () => {
    try {
      const res = await axios.post(`${API_URL}/tasks`);
      console.log(res.data);
      if (res.status === 200) {
        dispatch(getTasks());
      }
    } catch (error) {
      console.log(error, "error de la creacion de la tarea");
    }
  };

  const handleInput = (type, value) => {
    setInput({
      ...input,
      [type]: value,
    });
  };

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
        value={input.title}
        placeholder="Agrega aqui tu título"
        style={globalStyles.textInputTaskForm}
        onChangeText={(value) => handleInput("title", value)}
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
      <TouchableOpacity style={globalStyles.buttonTask} onPress={createTasks}>
        <Text style={globalStyles.buttonText}>Confirmar tarea</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.buttonTask}>
        <Text style={globalStyles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
