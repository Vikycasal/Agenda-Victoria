import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../Screens/styles";
//librerias
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Navbar() {
  return (
    <View style={globalStyles.navbar}>
      <Text style={globalStyles.navbarText}>Agenda Personal</Text>
      <MaterialCommunityIcons
        name="logout"
        size={22}
        color="pink"
        style={globalStyles.navbarIcon}
      />
    </View>
  );
}
