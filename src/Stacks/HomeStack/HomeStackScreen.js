import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Home } from "../../Screens/Home";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
    // screenOptions={() => ({
    //   headerShown: false,
    // })}
    >
      <HomeStack.Screen name="home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
