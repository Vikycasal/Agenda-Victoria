import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Home } from "../../Screens/Home";

export const HomeStackScreens = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={Home} />
    </HomeStack.Navigator>
  );
};
