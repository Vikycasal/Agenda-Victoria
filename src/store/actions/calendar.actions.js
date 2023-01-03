import { API_URL } from "../../constant/api.constant";
//reducer
import { setCalendar } from "../reducers/calendar.reducer";

//traigo todos los datos de las tareas
export const getCalendar = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/calendar`);
    const data = await res.json();
    console.log(data, "Mostrando getCalendar");
    if (Array.isArray(data)) {
      dispatch(setCalendar(data));
    }
  } catch (error) {
    console.log(error, "error de Calendar actions");
  }
};
