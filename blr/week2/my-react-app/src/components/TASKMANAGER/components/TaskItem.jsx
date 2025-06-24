import React, { useState } from 'react';

export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      onEdit(task.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? '💾' : '✏️'}</button>
      <button onClick={() => onDelete(task.id)}>🗑️</button>
    </li>
  );
}
