import React from 'react'

function ToDoList({ setTodos, todos }) {
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

    function handleDeleteBtn(key) {
        setTodos(currentTodos => {
          return currentTodos.filter(item => {
            return item.key != key;
          });
        });
    }

    return (
        <>
            <h1> To Do List </h1>
            <ul>
            { todos.map(item => {

                return (
                <li key={item.key}>
                    <label>
                        <input 
                        type='checkbox'
                        onChange={() => handleCheckBox(item.key)}
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
    )
}

export default ToDoList;