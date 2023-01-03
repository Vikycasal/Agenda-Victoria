import { API_URL } from "../../constant/api.constant";
//reducer
import { setNotes } from "../reducers/notes.reducer";

//traigo todos los datos de las tareas
export const getNotes = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/notes`);
    const data = await res.json();
    console.log(data, "Mostrando getNotes");
    if (Array.isArray(data)) {
      dispatch(setNotes(data));
    }
  } catch (error) {
    console.log(error, "error de Notes actions");
  }
};
