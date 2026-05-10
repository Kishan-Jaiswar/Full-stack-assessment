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

    // Description validation
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <div>
        <input
          className="w-full bg-gray-50 border border-gray-200 p-3 sm:p-4 rounded-2xl text-sm sm:text-base outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {errors?.title && (
          <p className="text-red-500 text-xs mt-1">{errors?.title}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <textarea
          rows={4}
          className="w-full bg-gray-50 border border-gray-200 p-3 sm:p-4 rounded-2xl text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-400 transition"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {errors?.description && (
          <p className="text-red-500 text-xs mt-1">{errors?.description}</p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base font-medium hover:bg-black active:scale-[0.99] transition-all"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
