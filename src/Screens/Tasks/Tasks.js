import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
//componentes
import { Navbar } from "../../Components/Navbar/Navbar";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/actions/tasks.actions";

export function Tasks() {
  //constantes
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //tareas
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Tareas</Text>
      <Text style={globalStyles.subtitleText}>
        <MaterialCommunityIcons
          name="home-lightning-bolt"
          size={24}
          color="pink"
          style={globalStyles.taskHouseIcon}
        />
        Tareas de la Casa
      </Text>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color="pink"
        style={globalStyles.plusIcon}
        onPress={() => navigation.navigate("tasks_1")}
      />
      <View style={globalStyles.boxTasks}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Tareas</DataTable.Title>
            <DataTable.Title>Editar</DataTable.Title>
            <DataTable.Title>Eliminar</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            {tasks.length ? (
              tasks.map((data, index) => (
                <DataTable.Cell key={index}>
                  {data.title}
                  <MaterialCommunityIcons
                    name="note-edit-outline"
                    size={24}
                    color="pink"
                    style={globalStyles.taskHouseIcon}
                  />
                  <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={24}
                    color="pink"
                    style={globalStyles.taskHouseIcon}
                  />
                </DataTable.Cell>
              ))
            ) : (
              <DataTable.Cell>No existe ninguna tarea</DataTable.Cell>
            )}
          </DataTable.Row>
        </DataTable>
      </View>
      <Text style={globalStyles.subtitleText}>
        <MaterialCommunityIcons
          name="briefcase"
          size={24}
          color="pink"
          style={globalStyles.taskHouseIcon}
        />
        Tareas del Trabajo
      </Text>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color="pink"
        style={globalStyles.plusIcon}
        onPress={() => navigation.navigate("tasks_1")}
      />
      <View style={globalStyles.boxTasks}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Tareas</DataTable.Title>
            <DataTable.Title>Editar</DataTable.Title>
            <DataTable.Title>Eliminar</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            {tasks.length ? (
              tasks.map((data, index) => (
                <DataTable.Cell key={index}>
                  {data.title}
                  <MaterialCommunityIcons
                    name="note-edit-outline"
                    size={24}
                    color="pink"
                    style={globalStyles.taskHouseIcon}
                  />
                  <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={24}
                    color="pink"
                    style={globalStyles.taskHouseIcon}
                  />
                </DataTable.Cell>
              ))
            ) : (
              <DataTable.Cell>No existe ninguna tarea</DataTable.Cell>
            )}
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
}
