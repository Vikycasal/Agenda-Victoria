import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
//components
import { Navbar } from "../../Components/Navbar/Navbar";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../store/actions/notes.actions";

export function Notes() {
  //constangtes
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //notas
  const notes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <View>
      <Navbar />
      <Text style={globalStyles.initialText}>Mis Notas</Text>
      <Text style={globalStyles.subtitleText}>
        Agregar nueva nota
        <MaterialCommunityIcons
          name="plus"
          size={24}
          color="pink"
          style={globalStyles.plusIcon}
          onPress={() => navigation.navigate("notes_1")}
        />
      </Text>
      {notes.length ? (
        notes.map((data, index) => (
          <View key={index}>
            <Text>{data.title}</Text>
            <Text>{data.description}</Text>
          </View>
        ))
      ) : (
        <Text>No existe ninguna nota</Text>
      )}
    </View>
  );
}
