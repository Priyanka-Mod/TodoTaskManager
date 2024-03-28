import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../type";

export interface todoState{
    list: TaskType[]
}
const initialState= {
    list: [],
};

export const todoListSlice = createSlice({
    name:'toDoList',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.list = [...state.list ,action.payload];
        },
        delTask:(state,action:PayloadAction) => {
            state.list = state.list.filter(data =>data.id !== action.payload);
        },
        editTask:(state,action:PayloadAction) => {
            const updateValue = state.list.find((data) => data.id === action.payload.id)
            if(updateValue){
                updateValue.task = action.payload.task
            }
        },
    },
});

export const {addTask , delTask , editTask} = todoListSlice.actions;

export default todoListSlice.reducer; 
