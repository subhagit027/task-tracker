import React, { useState } from "react";
import "./TaskEditModal.css";

const TaskEditModal = ({ task, isOpen, onClose, onSave }) => {
  const [editFormData, setEditFormData] = useState({ ...task });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSave = () => {
    onSave(editFormData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form>
          <input
            type="text"
            name="title"
            value={editFormData.title}
            onChange={handleEditChange}
            placeholder="Title"
            required
          />
          <textarea
            name="description"
            value={editFormData.description}
            onChange={handleEditChange}
            placeholder="Description"
            required
          ></textarea>
          <input
            type="date"
            name="dueDate"
            value={editFormData.dueDate}
            onChange={handleEditChange}
            required
          />
          <select
            name="status"
            value={editFormData.status}
            onChange={handleEditChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </form>
        <div className="modal-actions">
          <button onClick={handleSave} className="btn-save">
            Save
          </button>
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
