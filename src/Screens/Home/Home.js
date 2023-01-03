import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/actions/tasks.actions";
import { getBills } from "../../store/actions/bills.actions";
import { getCalendar } from "../../store/actions/calendar.actions";
import { getNotes } from "../../store/actions/notes.actions";

export function Home() {
  //constantes
  const dispatch = useDispatch();
  //tareas
  const tasks = useSelector((state) => state.tasks.tasks);
  //cuentas
  const bills = useSelector((state) => state.bills.bills);
  //calendario
  const calendar = useSelector((state) => state.calendar.calendar);
  //notas
  const notes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    dispatch(getTasks());
    dispatch(getBills());
    dispatch(getNotes());
    dispatch(getCalendar());
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
          {calendar.length ? (
            calendar.map((data, index) => (
              <View key={index}>
                <Text>{data.title}</Text>
              </View>
            ))
          ) : (
            <Text>No tienes nada el dia de hoy!!</Text>
          )}
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
            <Text>No se cargaron tareas aun! 😛</Text>
          )}
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
          {bills.length ? (
            bills.map((data, index) => (
              <View key={index}>
                <Text>{data.title}</Text>
              </View>
            ))
          ) : (
            <Text>No tenes ninguna cuenta a vencer 😛</Text>
          )}
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
          {notes.length ? (
            notes.map((data, index) => <View key={index}>{data.title}</View>)
          ) : (
            <Text>No tenes notas todavia!</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
