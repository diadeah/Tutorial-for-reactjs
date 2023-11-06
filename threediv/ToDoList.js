// ToDoList.js
import React, { useState } from 'react';

const ToDoList = ({ tasks, handleAddTask }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    handleAddTask(task);
    setTask('');
  };

  return (
    <div className="todo-list">
      <input type="text" value={task} onChange={handleTaskChange} />
      <button onClick={handleAdd}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
