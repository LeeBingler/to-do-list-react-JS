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
        item.key != key;
      });
    });
  }
  
  function handleCheckBox(key) {
    setTodos(currentTodos => {
      return currentTodos.map(item => {
        if (item.key === key) {
          return {...item, completed: !item.completed};
        }
      });
    });

    console.log(todos);
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
    
    <h1> To Do List </h1>
    <ul>
    { todos.map(item => {

        return (
          <li key={item.key}>
            <label>
              <input 
              type='checkbox'
              onChange={event => handleCheckBox(item.key)}
              checked={item.completed}/>
              {item.text}
            </label>
            <button 
            className='btn btn-danger'
            onClick={() => handleDeleteBtn(item.key)}> 
              Delete 
            </button>
          </li>
          )
        })
    }
        
        </ul>
        </>
        );
      };
      
      export default App;