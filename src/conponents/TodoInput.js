import React, {useState} from 'react';
import './TodoInput.css'

const TodoInput = (props) => {
    const [value, setValue] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.putTodo(value)
            setValue("")
        }}>
            <input type="text" placeholder='print...' value={value} onChange={(e)=> setValue(e.target.value)}/>
        </form>
    );
};

export default TodoInput;