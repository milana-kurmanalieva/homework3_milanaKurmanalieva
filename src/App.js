import React, {useState} from 'react';
import TodoInput from "./conponents/TodoInput";

const App = () => {
    const [todos, setTodos] = useState([])
    const putTodo = (value) => {
        if (value) {
            setTodos([...todos, {id: Date.now(), text: value, done: false}])
        }else  {
            alert('Please print something')
        }
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo=> todo.id !== id))
    }
    return (
        <div className="wrapper">
            <h1>Create Todo</h1>
            <TodoInput
                    putTodo={putTodo}
                />
            <ul className="todos">
                {
                    todos.map(el => {
                        return(
                            <li key={el.id} >
                                {el.text}
                                <button onClick={(e)=>{
                                    e.stopPropagation()
                                    deleteTodo(el.id)
                                }}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default App;