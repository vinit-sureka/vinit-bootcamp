import React, { useState } from 'react';
import TaskForm from './TaskFrom';
import TaskList from './TaskList';
// import TaskForm from './TaskForm';
// import TaskList from './TaskList';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <>
      <TaskForm onAdd={addTask} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Pending</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleComplete}
        onEdit={editTask}
        onDelete={deleteTask}
      />
      <div className="footer">
        <span>Total: {tasks.length}</span>
        <span>Completed: {completedCount}</span>
        <button onClick={() => setTasks(tasks.filter(t => !t.completed))}>
          Clear Completed
        </button>
      </div>
    </>
  );
}
