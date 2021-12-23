import React from 'react';
import './App.css';
import { NewTodoModal } from './components/TodoModal';
import { TodosTable } from './components/TodosTable';

const App = () => {
  return (
    <div className="App">
      <h3> My ToDo</h3>
      <div style={{maxWidth: '70%', margin: 'auto'}}>
        <div style={{ textAlign: 'right'}}>
        <NewTodoModal />
        </div>
        <TodosTable />
      </div>
    </div>
  );
}

export default App;
