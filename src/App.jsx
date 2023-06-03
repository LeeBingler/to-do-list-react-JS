import { useEffect, useState } from 'react'
import './style.css'
import ToDoList from './components/ToDoList';
import Form from './components/Form';

function App() {
  const [todos, setTodos] = useState(() => {
    if (localStorage.getItem('TODOS') === null) return [];
    return JSON.parse(localStorage.getItem('TODOS'));
  });
  
  useEffect(() => {
    localStorage.setItem('TODOS', JSON.stringify(todos))
  }, [todos]);
  
   
  return (
    <>
      <Form setTodos={setTodos} />
      <ToDoList setTodos={setTodos} todos={todos} />
    </>
  );
}
      
export default App;