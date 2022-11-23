import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Tasks } from "../../Screens/Tasks";

const TasksStackScreen = () => {
  const TasksStack = createNativeStackNavigator();

  return (
    <TasksStack.Navigator
    // screenOptions={() => ({
    //   headerShown: false,
    // })}
    >
      <TasksStack.Screen name="tasks" component={Tasks} />
    </TasksStack.Navigator>
  );
};

export default TasksStackScreen;
