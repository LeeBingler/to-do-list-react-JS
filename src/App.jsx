import { useState } from 'react'
import './style.css'

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  };

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
      <button className='btn' onClick={() => setTodos(newItem)}> Add </button>
    </form>

    <h1>To Do list</h1>
    <ul>
      <li>
        <label>
          <input type='checkbox'/>
          YES
        </label>
        <button className='btn btn-danger'> Delete </button>
      </li>
    </ul>
    </>
  );
};

export default App;
