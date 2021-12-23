import { ActionCreators } from "../redux/todoReducer";

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

