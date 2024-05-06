// src/components/TodoItem.js
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ item, removeTodo }) => {
  return (
    <li className="todo-item">
      {item}
      <button className="delete-button" onClick={removeTodo}>Delete</button>
    </li>
  );
};

// Export default component
export default TodoItem;
