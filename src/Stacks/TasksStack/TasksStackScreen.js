import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Tasks, Tasks_1 } from "../../Screens/Tasks";

const TasksStackScreen = () => {
  const TasksStack = createNativeStackNavigator();

  return (
    <TasksStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <TasksStack.Screen name="tasks" component={Tasks} />
      <TasksStack.Screen name="tasks_1" component={Tasks_1} />
    </TasksStack.Navigator>
  );
};

export default TasksStackScreen;
