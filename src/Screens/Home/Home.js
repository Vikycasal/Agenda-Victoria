import React from "react";
import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Home() {
  return (
    <ScrollView>
      <View>
        <Navbar />
        <Text style={globalStyles.initialText}>Home</Text>
        <Text style={globalStyles.subtitleText}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={24}
            color="#037ef3"
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
            color="#037ef3"
            style={globalStyles.taskHouseIcon}
          />
          Tareas pendientes
        </Text>
        <View style={globalStyles.boxTasks}>
          <Text>Lugar</Text>
          <Text>Concepto</Text>
        </View>
        <Text style={globalStyles.subtitleText}>
          <MaterialCommunityIcons
            name="cash-plus"
            size={28}
            color="#037ef3"
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
            color="#037ef3"
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
