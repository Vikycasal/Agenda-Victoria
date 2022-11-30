import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";

export const globalStyles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    marginTop: 70,
  },
  navbarText: {
    fontSize: 22,
    color: "grey",
    marginLeft: 10,
  },
  navbarIcon: {
    marginLeft: 180,
  },
  initialText: {
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
    // position: "absolute",
  },
  subtitleText: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
  },
  boxTasks: {
    backgroundColor: "white",
    width: 370,
    height: 192,
    marginLeft: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  taskHouseIcon: {
    marginTop: 30,
    position: "absolute",
  },
  cashIcon: {
    position: "absolute",
    marginTop: 30,
  },
  plusIcon: {
    marginLeft: 350,
    marginTop: -25,
  },
  textTaskForm: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
  },
  textInputTaskForm: {
    backgroundColor: "white",
    height: 60,
    width: 350,
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonTask: {
    backgroundColor: "pink",
    marginTop: 20,
    width: 250,
    height: 50,
    borderRadius: 20,
    marginLeft: 60,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    marginTop: 18,
    marginLeft: 70,
  },
});
