// App.js
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import Welcome from './components/Welcome';
import Application from './components/Application';
import Navbar from './navbar';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="left">
          <ToDoList tasks={tasks} handleAddTask={handleAddTask} />
        </div>
        <div className="middle">
          <Welcome />
          <a href="https://www.wikia.com/" target="_blank" rel="noopener noreferrer">
            <button>Go to Wikia</button>
          </a>
        </div>
        <div className="right">
          <Application />
        </div>
      </div>
    </div>
  );
}

export default App;
