import { Provider } from "react-redux";
import { store } from "./src/store/store";
//el stack de funciones
import GeneralStack from "./src/Stacks/GeneralStack";

export default function App() {
  return (
    <Provider store={store}>
      <GeneralStack />
    </Provider>
  );
}
