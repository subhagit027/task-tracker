import React, { useState } from "react";

const TaskList = ({ tasks, editTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const startEdit = (task) => {
    setEditingTask(task.id);
    setEditFormData(task);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const submitEdit = (e) => {
    e.preventDefault();
    editTask(editFormData);
    setEditingTask(null);
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available. Add some tasks!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) =>
              editingTask === task.id ? (
                <tr key={task.id}>
                  <td>
                    <input
                      type="text"
                      name="title"
                      value={editFormData.title}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <textarea
                      name="description"
                      value={editFormData.description}
                      onChange={handleEditChange}
                    ></textarea>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="dueDate"
                      value={editFormData.dueDate}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <select
                      name="status"
                      value={editFormData.status}
                      onChange={handleEditChange}
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={submitEdit}>Save</button>
                    <button onClick={() => setEditingTask(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={task.id}>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.dueDate}</td>
                  <td>{task.status}</td>
                  <td>
                    <button onClick={() => startEdit(task)}>Edit</button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
