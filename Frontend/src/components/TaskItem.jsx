const TaskItem = ({ task, onStatusChange, onDelete }) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    wip: "bg-blue-100 text-blue-700",
    done: "bg-green-100 text-green-700",
  };

  return (
    <div
      className="
        border border-gray-200 bg-white
        rounded-2xl p-4 sm:p-5
        hover:shadow-md transition-all
      "
    >
      {/* Title */}
      <h3
        className={`
          text-sm sm:text-base font-semibold break-words
          ${
            task.status === "done"
              ? "line-through text-gray-400"
              : "text-gray-800"
          }
        `}
      >
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className="text-xs sm:text-sm text-gray-500 mt-2 break-words leading-relaxed">
          {task.description}
        </p>
      )}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between gap-3">
        {/* Status Tag */}
        <div>
          <span
            className={`
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-[11px] sm:text-xs
        font-semibold tracking-wide
        uppercase border
        ${statusColors[task.status]}
      `}
          >
            {task.status}
          </span>
        </div>

        {/* Action Buttons */}
        <div>
          {task.status === "pending" && (
            <button
              onClick={() => onStatusChange(task._id, "wip")}
              className="
          h-9 px-4
          rounded-xl
          bg-blue-600 text-white
          text-xs sm:text-sm font-medium
          hover:bg-blue-700
          active:scale-[0.98]
          transition-all duration-200
          shadow-sm
          cursor-pointer
        "
            >
              Move to WIP
            </button>
          )}

          {task.status === "wip" && (
            <button
              onClick={() => onStatusChange(task._id, "done")}
              className="
          h-9 px-4
          rounded-xl
          bg-green-600 text-white
          text-xs sm:text-sm font-medium
          hover:bg-green-700
          active:scale-[0.98]
          transition-all duration-200
          shadow-sm
          cursor-pointer
        "
            >
              Mark Done
            </button>
          )}

          {task.status === "done" && (
            <button
              onClick={() => onDelete(task._id)}
              className="
          h-9 px-4
          rounded-xl
          bg-red-600 text-white
          text-xs sm:text-sm font-medium
          hover:bg-red-700
          active:scale-[0.98]
          transition-all duration-200
          shadow-sm
          cursor-pointer
        "
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
