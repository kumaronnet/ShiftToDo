import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTodo, ExportTodos, GetTodos } from '../services/todo';
import { Button, FormCheck } from 'react-bootstrap';

export const TodosTable = () => {
    const todos = useSelector(state => state.todoReducer.todos);
    const dispatch = useDispatch();

    useEffect(() =>  {
        GetTodos(dispatch);
    }, []);

    return <div>
        <table className="table table-dark">
        <tbody>
            {
                todos.map(t =>
                    <tr>
                        <td style={{width: '3rem'}}>
                            <FormCheck style={{float:'left',marginTop:'0px'}}></FormCheck>
                        </td>
                        <td style={ {textAlign: 'left'}}>{t.value}</td>
                        <td style={{width: '3rem'}}>
                            <Button className='btn-danger' onClick={() => DeleteTodo(dispatch, t)}>Delete</Button>
                        </td>
                    </tr>
                )
            }
        </tbody>
    </table>
    <Button style={{float: 'çenter'}} onClick={() => ExportTodos(dispatch, todos)}>Export</Button>  
    </div> 
}