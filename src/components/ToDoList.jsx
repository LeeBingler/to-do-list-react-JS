import React from 'react'

function ToDoList(props) {
    let list = props.list;

    return (
        <>
            <h1> To Do List </h1>
            <ul>
            {
            list.length !== 0 &&
            list.map(item => {
                console.log(item);
                return (
                <li>
                    <label>
                        <input 
                        type='checkbox'
                        onChange={props.handleCheck(item.key)}
                        Checked={item.completed}
                        />
                        {item.text}
                    </label>
                    <button 
                    className='btn btn-danger'
                    onClick={props.deleteBtnFunc}> 
                        Delete 
                    </button>
                </li>
               )
            })}
            </ul>
        </>
    )
}

export default ToDoList