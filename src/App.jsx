import { useState } from 'react'
import './style.css'
import ToDoList from './components/ToDoList';
import Form from './components/Form';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);
  
  function handleSubmit(event) {
    event.preventDefault();
  };
  
  function handleAddBtn() {
    if (newItem.length === 0)
    return;
    let item = {text: newItem, completed: false, key: crypto.randomUUID()};
    todos.push(item);
    setNewItem('');
    setTodos(todos);
  }
  
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
    <Form handleSubmit={handleSubmit} setNewItem={setNewItem} newItem={newItem} handleAddBtn={handleAddBtn}/>
    <ToDoList todos={todos} handleCheckBox={handleCheckBox} handleDeleteBtn={handleDeleteBtn}/>
    </>
  );
}
      
      export default App;