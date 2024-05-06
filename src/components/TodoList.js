// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} item={todo} removeTodo={() => removeTodo(index)} />
      ))}
    </ul>
  );
};

// Export default component
export default TodoList;
