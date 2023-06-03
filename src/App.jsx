import { useState } from 'react'
import './style.css'
import ToDoList from './components/ToDoList';

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
    <form 
      className='new-item-form'
      onSubmit={handleSubmit}>
        <div className='form-row'>
          <label> New Item </label>
          <input value={newItem} 
          onChange={event => setNewItem(event.target.value)}
          type='text' 
          id='item'/>
        </div>
      <button className='btn' onClick={handleAddBtn}> Add </button>
    </form>

    <ToDoList todos={todos} handleCheckBox={handleCheckBox} handleDeleteBtn={handleDeleteBtn}/>
    </>
  );
}
      
      export default App;