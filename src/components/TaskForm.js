import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      dueDate,
      status,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setDueDate("");
    setStatus("Pending");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
