import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    if (!value.trim()) return "Task is required.";
    if (value.length > 100) return "Max length is 100 characters.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(text);
    if (validation) {
      setError(validation);
    } else {
      onAdd(text.trim());
      setText('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Enter a task"
        onChange={(e) => {
          setText(e.target.value);
          if (error) setError(validate(e.target.value));
        }}
      />
      <button type="submit">➕</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
