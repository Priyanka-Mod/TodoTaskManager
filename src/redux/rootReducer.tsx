import { combineReducers } from "@reduxjs/toolkit";
import todoListSlice from "./todoListSlice";


export default combineReducers({
    todoList: todoListSlice
})