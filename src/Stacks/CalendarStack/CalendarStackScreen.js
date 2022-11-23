import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Calendar } from "../../Screens/Calendar";

const CalendarStackScreen = () => {
  const CalendarStack = createNativeStackNavigator();

  return (
    <CalendarStack.Navigator
    // screenOptions={() => ({
    //   headerShown: false,
    // })}
    >
      <CalendarStack.Screen name="calendar" component={Calendar} />
    </CalendarStack.Navigator>
  );
};

export default CalendarStackScreen;
