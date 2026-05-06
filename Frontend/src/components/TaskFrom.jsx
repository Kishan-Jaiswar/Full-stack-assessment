import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { title: "", description: "" };

    // Title validation
    if (!title.trim()) {
      newErrors.title = "Title is required";
      isValid = false;
    }

    // Description validation (NOW REQUIRED)
    if (!description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    } else if (description.trim().length > 200) {
      newErrors.description = "Description cannot exceed 200 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onAdd({
      title: title.trim(),
      description: description.trim(),
      status: "pending",
    });

    setTitle("");
    setDescription("");
    setErrors({ title: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      {/* Title */}
      <input
        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && (
        <p className="text-sm text-error">{errors.title}</p>
      )}

      {/* Description */}
      <textarea
        className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl text-sm"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && (
        <p className="text-sm text-error">{errors.description}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
