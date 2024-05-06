// src/components/TodoInput.js
import React, { useState } from 'react';
import './TodoInput.css';

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={() => {
        if (inputValue.trim()) {
          addTodo(inputValue.trim());
          setInputValue('');
        }
      }}>
        Add
      </button>
    </div>
  );
};

// Export default component
export default TodoInput;
