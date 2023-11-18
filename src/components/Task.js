// Import React and other necessary modules
import React, { useState } from 'react';
import './Task.css'; // Import the updated CSS file


const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'low',
    category: 'home',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const addTask = () => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'low',
      category: 'home',
    });
  };

  const markComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'black';
    }
  };
  
  const getCategoryImage = (category) => {
      switch (category) {
        case 'home':
          return 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png';
        case 'college':
          return 'https://cdn-icons-png.flaticon.com/512/8074/8074794.png'; // Add the URL for the college category image
        case 'personal':
          return 'https://cdn-icons-png.flaticon.com/512/6323/6323090.png'; // Add the URL for the personal category image
        case 'fitness':
          return 'https://cdn.pixabay.com/photo/2018/08/23/20/27/gym-3626589_1280.png'; // Add the URL for the fitness category image
        default:
          return '';
      }
    };
  return (
   

    <div className='aman'> 
     
    <div className="task-manager-container " >
      <h1>Add New Task</h1>
      <div className="task-inputs">
        <input
          type="text"
          placeholder="Task Name"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <textarea
          className="description-input"
          placeholder="Task Description"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
        ></textarea>
        <input
          type="date"
          placeholder="Due Date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
        //   style={{ backgroundColor: getPriorityColor(newTask.priority) }}
        >
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
        <select
          name="category"
          value={newTask.category}
          onChange={handleInputChange}
       
        >
          <option value="home">Home</option>
          <option value="college">College</option>
          <option value="personal">Personal</option>
          <option value="fitness">Fitness</option>
        </select>
        <button onClick={addTask}>Add Task</button>
       </div> 

       {/* this part of code displays the tasl created */}
      
       <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className={task.completed ? 'completed-task' : 'task'}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p style={{ color: getPriorityColor(task.priority) }}>Priority: {task.priority}</p>
            <div className="category-image">
              <img src={getCategoryImage(task.category)} alt={task.category} />
              <p>Category: {task.category}</p>
            </div>
            {!task.completed && (
              <button onClick={() => markComplete(index)}>Mark Complete</button>
            )}
            <button onClick={() => deleteTask(index)}>Delete Task</button>
          </div>
        ))}
      </div> 
    </div>
    </div>
    
  );
};

export default Task;





