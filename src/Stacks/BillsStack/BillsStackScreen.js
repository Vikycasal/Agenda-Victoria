import React from "react";
//librerias
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//componentes
import { Bills } from "../../Screens/Bills/Bills";
import { Bills_1 } from "../../Screens/Bills";

const BillsStackScreen = () => {
  const BillsStack = createNativeStackNavigator();

  return (
    <BillsStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <BillsStack.Screen name="bills" component={Bills} />
      <BillsStack.Screen name="bills_1" component={Bills_1} />
    </BillsStack.Navigator>
  );
};

export default BillsStackScreen;
