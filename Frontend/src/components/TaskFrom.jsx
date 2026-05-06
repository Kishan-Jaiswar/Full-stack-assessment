import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <input
        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
