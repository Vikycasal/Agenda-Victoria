import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { DataTable, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//redux
import { getBills } from "../../store/actions/bills.actions";
import { useDispatch, useSelector } from "react-redux";

export function Bills() {
  //constantes
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //cuentas
  const bills = useSelector((state) => state.bills.bills);

  useEffect(() => {
    dispatch(getBills());
  }, []);

  return (
    <ScrollView>
      <View>
        <Navbar />
        <Text style={globalStyles.initialText}>Cuentas</Text>
        <Text style={globalStyles.subtitleText}>Agregar nuevo gasto</Text>
        <MaterialCommunityIcons
          name="plus"
          size={24}
          color="pink"
          style={globalStyles.plusIcon}
          onPress={() => navigation.navigate("bills_1")}
        />
        <View style={globalStyles.boxTasks}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Concepto</DataTable.Title>
              <DataTable.Title>Monto</DataTable.Title>
              <DataTable.Title>Vencimiento</DataTable.Title>
            </DataTable.Header>
            <DataTable.Header>
              {bills.length ? (
                bills.map((data, index) => (
                  <View key={index}>
                    <Text>{data.title}</Text>
                  </View>
                ))
              ) : (
                <Text>No hay ninguna cuenta agregada</Text>
              )}
            </DataTable.Header>
            <DataTable.Header>
              <DataTable.Title>TOTAL</DataTable.Title>
              <DataTable.Title>$4500</DataTable.Title>
            </DataTable.Header>
          </DataTable>
          <TextInput placeholder="Ingresa tu email" />
          <TouchableOpacity style={globalStyles.buttonTask}>
            <Text style={globalStyles.buttonText}>Enviar por email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.buttonTask}>
            <Text style={globalStyles.buttonText}>Borrar lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
