const TaskItem = ({ task, onStatusChange, onDelete }) => {
  const statusStyles = {
    pending: "text-yellow-600",
    wip: "text-blue-600",
    done: "text-green-600",
  };

  const statuses = ["pending", "wip", "done"];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      {/* Left */}
      <div className="flex-1">
        <h3
          className={`text-base font-medium ${
            task.status === "done"
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}
        >
          {task.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1">{task.description}</p>

        {/* Status */}
        <span
          className={`text-xs font-medium mt-2 inline-block ${
            statusStyles[task.status]
          }`}
        >
          {task.status.toUpperCase()}
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
        {statuses.map((status) =>
          status !== task.status ? (
            <button
              key={status}
              onClick={() => onStatusChange(task._id, status)}
              className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600 active:scale-95"
            >
              {status}
            </button>
          ) : (
            <span
              key={status}
              className="text-xs px-2 py-1 rounded-md bg-black text-white"
            >
              {status}
            </span>
          ),
        )}

        <button
          onClick={() => onDelete(task._id)}
          className="text-xs text-red-500 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
