import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Bills } from "../../Screens/Bills/Bills";

const BillsStackScreen = () => {
  const BillsStack = createNativeStackNavigator();

  return (
    <BillsStack.Navigator
    // screenOptions={() => ({
    //   headerShown: false,
    // })}
    >
      <BillsStack.Screen name="bills" component={Bills} />
    </BillsStack.Navigator>
  );
};

export default BillsStackScreen;
