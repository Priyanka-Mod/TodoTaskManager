import React from "react";
import ToDoListScreen from "./src/screens/ToDoListScreen";
import { Provider } from 'react-redux'
import { store } from "./src/redux/store";
const App = () => {
  return (
    <Provider store={store}>
     <ToDoListScreen/>
    </Provider>
  )
}

export default App