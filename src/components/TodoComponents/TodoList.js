// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

function TodoList(props) {
    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)} />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoList;