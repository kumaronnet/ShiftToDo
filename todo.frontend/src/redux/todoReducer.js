const initialState = {
    todos: [],
}

export const ActionTypes = {
    SET_TODOS: 'SET_TODOS',
    DELETE_TODO: 'DELETE_TODO',
    NEW_TODO: 'NEW_TODO',
    EDIT_TODO: 'EDIT_TODO',
}

export const ActionCreators = {
    setTodos: payload => ({type: ActionTypes.SET_TODOS, payload}),
    deleteTodo: payload => ({type: ActionTypes.DELETE_TODO, payload}),
    newTodo: payload => ({type: ActionTypes.NEW_TODO, payload}),
    editTodo: payload => ({type: ActionTypes.EDIT_TODO, payload}),

}

export default function TodoReducer(state = initialState, action) {
    switch(action.type) {
        case ActionTypes.SET_TODOS:
            return {...state, todos: [...action.payload] };
        case ActionTypes.DELETE_TODO:
            for(let i = 0; i < state.todos.length; i++) {
                if(state.todos[i].id === action.payload.id) {
                    state.todos.splice(i, 1);
                    break;
                }
            }
            return {...state, todos: [...state.todos] }   
        case ActionTypes.NEW_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case ActionTypes.EDIT_TODO:
            for(let i = 0; i < state.todos.length; i++) {
                if(state.todos[i].id === action.payload.id) {
                    state.todos[i].value = action.payload.value;
                }
            } 
            return {...state, todos: [...state.todos] }   
        default:
            return state;
    }
}