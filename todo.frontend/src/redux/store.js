import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todoReducer';

export const store = configureStore({
  reducer: {
    todoReducer: TodoReducer,
  },
});
