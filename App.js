import React, { useState } from 'react';
import './App.css';
const TaskList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };


  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

 
  const showCompletedTasks = () => setFilter('completed');
  const showActiveTasks = () => setFilter('active');
  const showAllTasks = () => setFilter('all');

  const [filter, setFilter] = useState('all');


  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={showAllTasks}>Show All Tasks</button>
        <button onClick={showCompletedTasks}>Show Completed Tasks</button>
        <button onClick={showActiveTasks}>Show Active Tasks</button>
      </div>
    </div>
  );
};

export default TaskList;
