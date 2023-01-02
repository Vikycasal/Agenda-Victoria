import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/actions/tasks.actions";

export function Home() {
  //constantes
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <ScrollView>
      <View>
        <Navbar />
        <Text style={globalStyles.initialText}>Home</Text>
        <Text style={globalStyles.subtitleText}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={24}
            color="pink"
            style={globalStyles.taskHouseIcon}
          />
          Próximos
        </Text>
        <View style={globalStyles.boxTasks}>
          <Text>Fecha</Text>
          <Text>Concepto</Text>
        </View>
        <Text style={globalStyles.subtitleText}>
          <MaterialCommunityIcons
            name="calendar-check-outline"
            size={24}
            color="pink"
            style={globalStyles.taskHouseIcon}
          />
          Tareas pendientes
        </Text>
        <View style={globalStyles.boxTasks}>
          {tasks.length ? (
            tasks.map((data, index) => (
              <View key={index}>
                <Text>{data.title}</Text>
              </View>
            ))
          ) : (
            <Text>No hay datos</Text>
          )}
          <Text>Lugar</Text>
          <Text>Concepto</Text>
        </View>
        <Text style={globalStyles.subtitleText}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={28}
            color="pink"
            style={globalStyles.cashIcon}
          />
          Cuentas a vencer
        </Text>
        <View style={globalStyles.boxTasks}>
          <Text>Fecha</Text>
          <Text>Concepto</Text>
          <Text>Monto</Text>
        </View>
        <Text style={globalStyles.subtitleText}>
          <MaterialCommunityIcons
            name="note-multiple-outline"
            size={24}
            color="pink"
            style={globalStyles.taskHouseIcon}
          />
          Notas
        </Text>
        <View style={globalStyles.boxTasks}>
          <Text>Titulo nota</Text>
        </View>
      </View>
    </ScrollView>
  );
}
