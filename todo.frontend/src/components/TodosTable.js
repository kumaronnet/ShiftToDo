import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTodo, GetTodos } from '../services/todo';
import { Button } from 'react-bootstrap';
import { EditTodoModal } from './TodoModal';

export const TodosTable = () => {
    const todos = useSelector(state => state.todoReducer.todos);
    const dispatch = useDispatch();

    useEffect(() =>  {
        GetTodos(dispatch);
    }, []);

    return <table className="table table-dark">
        <tbody>
            {
                todos.map(t =>
                    <tr>
                        <td style={{width: '3rem'}}>
                            <EditTodoModal todo={t.value}/>
                        </td>
                        <td style={{width: '3rem'}}>
                            <Button className='btn btn-danger' onClick={() => DeleteTodo(dispatch, t)}>Delete</Button>
                        </td>
                        <td style={ {textAlign: 'left'}}>{t.value}</td>
                    </tr>
                )
            }

        </tbody>
    </table>
}