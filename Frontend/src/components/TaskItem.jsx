const TaskItem = ({ task, onStatusChange, onDelete }) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    wip: "bg-blue-100 text-blue-700",
    done: "bg-green-100 text-green-700",
  };

  const statuses = ["pending", "wip", "done"];

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-sm transition">
      {/* Title */}
      <h3
        className={`text-sm font-medium ${
          task.status === "done"
            ? "line-through text-gray-400"
            : "text-gray-800"
        }`}
      >
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-xs text-gray-500 mt-1">{task.description}</p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-3">
        {/* Status Badge */}
        <span
          className={`text-xs px-2 py-1 rounded-full ${statusColors[task.status]}`}
        >
          {task.status}
        </span>

        {/* Actions */}
        <div className="flex gap-2">
          {statuses.map(
            (status) =>
              status !== task.status && (
                <button
                  key={status}
                  onClick={() => onStatusChange(task._id, status)}
                  className="text-xs text-gray-400 hover:text-gray-700"
                >
                  {status}
                </button>
              ),
          )}

          <button
            onClick={() => onDelete(task._id)}
            className="text-xs text-red-400 hover:text-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
