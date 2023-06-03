import React from 'react'
import { useState } from 'react'

function Form({ setTodos }) {
    const [newItem, setNewItem] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    };

    function handleAddBtn() {
        if (newItem.length === 0)
          return;
        
        setTodos(currentTodos => {
          return [
            ...currentTodos, 
            {text: newItem, completed: false, key: crypto.randomUUID()}
          ];
        })
        setNewItem('');
    }

    return (
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
    )
}

export default Form;