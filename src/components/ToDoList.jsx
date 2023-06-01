import React from 'react'

function ToDoList(list) {


    return (
        <>
            <h1> ToDoList </h1>
            <ul>
            {list.map{item => {
                <li>
                    <label>
                        <input type='checkbox'/>
                        {item}
                    </label>
                    <button className='btn btn-danger'> Delete </button>
                </li>
            }}}
            </ul>
        </>
    )
}

export default ToDoList