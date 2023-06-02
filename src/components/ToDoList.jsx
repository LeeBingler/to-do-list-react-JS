import React from 'react'

function ToDoList(props) {

    let list = props.list;

    return (
        <>
            <h1> To Do List </h1>
            <ul>
            {list !== [] && list.map(item => {
                return (
                <li>
                    <label>
                    <input type='checkbox' checked={item.completed}/>
                        {item.text}
                    </label>
                    <button className='btn btn-danger'> Delete </button>
                </li>
                )
            })}
            </ul>
        </>
    )
}

export default ToDoList