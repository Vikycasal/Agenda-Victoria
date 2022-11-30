import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//componentes
import { Navbar } from "../../Components/Navbar/Navbar";

export function Bills_1() {
  //contantes
  const navigation = useNavigation();

  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Agregar nuevo gasto</Text>
      <Text style={globalStyles.subtitleText}>
        <MaterialCommunityIcons
          name="cash"
          size={24}
          color="pink"
          style={globalStyles.taskHouseIcon}
        />
        Gastos
      </Text>
      <Text style={globalStyles.textTaskForm}>Agregar Concepto</Text>
      <TextInput
        placeholder="Agrega aqui el concepto"
        style={globalStyles.textInputTaskForm}
      />
      <Text style={globalStyles.textTaskForm}>Agregar el monto a pagar</Text>
      <TextInput
        placeholder="Agrega aqui el monto en numeros"
        style={globalStyles.textInputTaskForm}
      />
      <Text style={globalStyles.textTaskForm}>Agregar fecha</Text>
      <TextInput
        placeholder="Agrega aqui la fecha"
        style={globalStyles.textInputTaskForm}
      />
      <TouchableOpacity
        style={globalStyles.buttonTask}
        onPress={() => navigation.navigate("bills")}
      >
        <Text style={globalStyles.buttonText}>Confirmar gasto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.buttonTask}
        onPress={() => navigation.navigate("bills")}
      >
        <Text style={globalStyles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}
