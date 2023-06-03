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
  
  function handleDeleteBtn(key) {
    setTodos(currentTodos => {
      return currentTodos.filter(item => {
        return item.key != key;
      });
    });
  }
  
  function handleCheckBox(key) {
    setTodos(currentTodos => {
      return currentTodos.map(item => {
        if (item.key === key) {
          return {...item, completed: !item.completed};
        }
        return item;
      });
    });
  }
  
  return (
    <>
      <Form setTodos={setTodos} />
      <ToDoList setTodos={setTodos} todos={todos} handleCheckBox={handleCheckBox} handleDeleteBtn={handleDeleteBtn} />
    </>
  );
}
      
export default App;