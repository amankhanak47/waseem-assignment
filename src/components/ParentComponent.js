// ParentComponent.js
import React, { useState } from 'react';
import Task from './Task';
import Home from './Home';

const ParentComponent = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
      <Task onAddTask={addTask} />
      <Home tasks={tasks} />
    </>
  );
};

export default ParentComponent;
