import React from "react";
//librerias
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
//componentes
import { HomeStackScreens } from "./Stacks/HomeStack/HomeStackScreens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  <Tab.Navigator>
    <Tab.Screen name="home" component={HomeStackScreens} />
  </Tab.Navigator>;
};

export default Tabs;
