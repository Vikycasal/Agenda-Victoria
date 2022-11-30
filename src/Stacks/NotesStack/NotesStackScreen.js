import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Notes } from "../../Screens/Notes";

const NotesStackScreen = () => {
  const NotesStack = createNativeStackNavigator();

  return (
    <NotesStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <NotesStack.Screen name="notes" component={Notes} />
    </NotesStack.Navigator>
  );
};

export default NotesStackScreen;
