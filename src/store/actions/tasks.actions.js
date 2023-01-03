import { API_URL } from "../../constant/api.constant";
//reducer
import { setTasks } from "../reducers/tasks.reducer";

//traigo todos los datos de las tareas
export const getTasks = () => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    const data = await res.json();
    console.log(data, "Mostrando getTasks");
    if (Array.isArray(data)) {
      dispatch(setTasks(data));
    }
  } catch (error) {
    console.log(error, "error");
  }
};
