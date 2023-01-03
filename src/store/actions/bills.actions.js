import { API_URL } from "../../constant/api.constant";
//reducer
import { setBills } from "../reducers/bills.reducer";

//traigo todos los datos de las tareas
export const getBills = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/bills`);
    const data = await res.json();
    console.log(data, "Mostrando getBills");
    if (Array.isArray(data)) {
      dispatch(setBills(data));
    }
  } catch (error) {
    console.log(error, "error de Bills actions");
  }
};
