import React from 'react'

function Form(props) {
    
    return (
        <form 
        className='new-item-form'
        onSubmit={props.handleSubmit}>
            <div className='form-row'>
            <label> New Item </label>
            <input value={props.newItem} 
            onChange={event => props.setNewItem(event.target.value)}
            type='text' 
            id='item'/>
            </div>
        <button className='btn' onClick={props.handleAddBtn}> Add </button>
        </form>
    )
}

export default Form