import { ActionCreators } from "../redux/todoReducer";
import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/todos',
})

export const ExportTodos = async (dispatch, todos) => {
    try {
            // api call
             await axiosInstance.post(todos);
    } catch {
        console.log("Error!");
    }
}



export const GetTodos = async (dispatch) => {
    try {
            // api call
            const response = [
                { value: 'Create ToDo List', id: 1},
            ];

            dispatch(ActionCreators.setTodos(response));

    } catch {
        console.log("Error!");
    }
}

export const DeleteTodo = async (dispatch, todo) => {
    try {
            // api call
            dispatch(ActionCreators.deleteTodo(todo));
    } catch {
        console.log("Error!");
    }
    
}

export const NewTodo = async (dispatch, todo) => {
    try {
            // api call
            const response = { value: todo , id: 1};       
            dispatch(ActionCreators.newTodo(response));
    }   catch {
        console.log("Error!");
    }
    
}

export const EditTodo = async (dispatch, todo) => {
    try {
            // api call
            const response = { value: todo , id: 1};       
            dispatch(ActionCreators.editTodo(response));
    } catch {
        console.log("Error!");
    }
    
}

