import React from 'react'

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
     <li className={`todo ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>✗</button>
    </li>
  );
  
}

export default TodoItem