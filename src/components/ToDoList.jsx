import React from 'react'

function ToDoList(props) {
    let todos = props.todos;

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
                    onChange={() => props.handleCheckBox(item.key)}
                    checked={item.completed}/>
                    {item.text}
                    </label>
                    <button 
                    className='btn btn-danger'
                    onClick={() => props.handleDeleteBtn(item.key)}> 
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