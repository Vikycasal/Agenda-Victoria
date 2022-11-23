import React from "react";
//librerias
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
//componentes
import HomeStackScreen from "./Stacks/HomeStack/HomeStackScreen";
import BillsStackScreen from "./Stacks/BillsStack/BillsStackScreen";
import NotesStackScreen from "./Stacks/NotesStack/NotesStackScreen";
import CalendarStackScreen from "./Stacks/CalendarStack/CalendarStackScreen";
import TasksStackScreen from "./Stacks/TasksStack/TasksStackScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
      case "Calendario":
        iconName = "calendar";
        break;
      case "Tareas":
        iconName = "book-open-outline";
        break;
      case "Home":
        iconName = "home";
        break;
      case "Cuentas":
        iconName = "cash";
        break;
      case "Notas":
        iconName = "book-open-page-variant-outline";
        break;
    }

    return (
      <Icon
        type="material-community"
        name={iconName}
        size={24}
        color={"pink"}
      />
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        inactiveTintColor: "black",
        activeTintColor: "blue",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Calendario" component={CalendarStackScreen} />
      <Tab.Screen name="Tareas" component={TasksStackScreen} />
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Cuentas" component={BillsStackScreen} />
      <Tab.Screen name="Notas" component={NotesStackScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
