import React from 'react'

function ToDoList(list) {

    return (
        <>
            <h1> ToDoList 24:45 </h1>
            <ul>
                {list.lenght > 0 && list.map(item => {
                    <li>
                        <label>
                            <input type='checkbox' checked={item.complete}/>
                            {item.text}
                        </label>
                        <button className='btn btn-danger'> Delete </button>
                    </li>
                })
                }
            </ul>
        </>
    )
}

export default ToDoList