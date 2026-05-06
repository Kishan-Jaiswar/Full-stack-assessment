import TaskItem from "./TaskItem";

const STATUS_LABELS = { pending: "Pending", wip: "In Progress", done: "Done" };

const TaskList = ({ tasks, filter, onStatusChange, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-14">
        <p className="text-4xl opacity-20">○</p>
        <p className="text-gray-400 mt-3 text-sm">
          {filter === "all"
            ? "No tasks yet. Start by adding one."
            : `No ${filter} tasks`}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.map((task, i) => (
        <TaskItem
          key={task._id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
