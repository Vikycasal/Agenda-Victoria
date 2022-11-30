import React from "react";
import { View, Text } from "react-native";
//librerias
import { Calendar } from "react-native-calendario";

export default function Calendario() {
  return (
    <View>
      <Calendar
        onChange={(range) => console.log(range)}
        minDate={new Date(2018, 3, 20)}
        startDate={new Date(2018, 3, 30)}
        endDate={new Date(2018, 4, 5)}
        theme={{
          activeDayColor: {},
          monthTitleTextStyle: {
            color: "pink",
            fontWeight: "300",
            fontSize: 16,
          },
          emptyMonthContainerStyle: {},
          emptyMonthTextStyle: {
            fontWeight: "200",
          },
          weekColumnsContainerStyle: {},
          weekColumnStyle: {
            paddingVertical: 10,
          },
          weekColumnTextStyle: {
            color: "pink",
            fontSize: 13,
          },
          nonTouchableDayContainerStyle: {},
          nonTouchableDayTextStyle: {},
          startDateContainerStyle: {},
          endDateContainerStyle: {},
          dayContainerStyle: {},
          dayTextStyle: {
            color: "pink",
            fontWeight: "200",
            fontSize: 15,
          },
          dayOutOfRangeContainerStyle: {},
          dayOutOfRangeTextStyle: {},
          todayContainerStyle: {},
          todayTextStyle: {
            color: "pink",
          },
          activeDayContainerStyle: {
            backgroundColor: "pink",
          },
          activeDayTextStyle: {
            color: "white",
          },
          nonTouchableLastMonthDayTextStyle: {},
        }}
      />
    </View>
  );
}
