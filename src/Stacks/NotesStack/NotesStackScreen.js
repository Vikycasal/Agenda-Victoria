import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Notes, Notes_1 } from "../../Screens/Notes";

const NotesStackScreen = () => {
  const NotesStack = createNativeStackNavigator();

  return (
    <NotesStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <NotesStack.Screen name="notes" component={Notes} />
      <NotesStack.Screen name="notes_1" component={Notes_1} />
    </NotesStack.Navigator>
  );
};

export default NotesStackScreen;
