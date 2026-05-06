import TaskItem from "./TaskItem";

const STATUS_LABELS = { pending: "Pending", wip: "In Progress", done: "Done" };

const TaskList = ({ tasks, filter, onStatusChange, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-3xl mb-3 opacity-30">✦</p>
        <p
          style={{ fontFamily: "'Fraunces', serif" }}
          className="text-xl font-light italic text-[#A8A29E]"
        >
          Nothing here yet
        </p>
        <p className="text-sm text-[#C4BDB8] mt-1.5">
          {filter === "all"
            ? "Add your first task above"
            : `No ${STATUS_LABELS[filter]?.toLowerCase()} tasks`}
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
          index={i}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;