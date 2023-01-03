import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
//componentes
import { Navbar } from "../../Components/Navbar/Navbar";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getBills } from "../../store/actions/bills.actions";
//api
import { API_URL } from "../../constant/api.constant";

export function Bills_1() {
  //contantes
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //cuentas
  const bills = useSelector((state) => state.bills.bills);

  //para crear una cuenta lo primero que tengo que hacer es hacer 1 constante con los campos a llenar
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  useEffect(() => {
    if (bills) {
      const { title, amount, date } = bills;
      setInput({
        ...input,
        title,
        amount,
        date,
      });
    }
  }, [bills]);

  const handleInput = (type, value) => {
    setInput({
      ...input,
      [type]: value,
    });
  };

  //constante para enviar a la api la creacion de la cuenta
  const createBill = async () => {
    try {
      //siempre hay que pasarle los datos que estoy cargando
      const res = await axios.post(`${API_URL}/bills`, input);
      console.log(res.data);
      if (res.status === 200) {
        dispatch(getBills());
      }
    } catch (error) {
      console.log(error.response.data, "Error de la creacion de la cuenta");
    }
  };

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
        value={input.title}
        placeholder="Agrega aqui el concepto"
        style={globalStyles.textInputTaskForm}
        onChangeText={(value) => handleInput("title", value)}
      />
      <Text style={globalStyles.textTaskForm}>Agregar el monto a pagar</Text>
      <TextInput
        placeholder="Agrega aqui el monto en numeros"
        value={input.amount}
        style={globalStyles.textInputTaskForm}
        onChangeText={(value) => handleInput("amount", value)}
      />
      <Text style={globalStyles.textTaskForm}>Agregar fecha</Text>
      <TextInput
        value={input.date}
        placeholder="Agrega aqui la fecha"
        style={globalStyles.textInputTaskForm}
        onChangeText={(value) => handleInput("date", value)}
      />
      <TouchableOpacity style={globalStyles.buttonTask} onPress={createBill}>
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
