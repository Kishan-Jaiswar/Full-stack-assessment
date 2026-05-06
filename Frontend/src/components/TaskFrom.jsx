import { useState } from "react";

// TaskForm.js
const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description, status: "pending" });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 space-y-2">
      <input
        className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <textarea
        className="w-full bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium active:scale-95 transition">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
