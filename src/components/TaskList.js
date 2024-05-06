// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, updateTask, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      {tasks.length ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            updateTask={updateTask}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks available. Add a new task to get started!</p>
      )}
    </div>
  );
};

export default TaskList;
