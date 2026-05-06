// App.js
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskFrom";
import TaskList from "./components/TaskList";
import * as api from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    const { data } = await api.getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (task) => {
    await api.createTask(task);
    fetchTasks();
  };

  const handleStatusChange = async (id, status) => {
    await api.updateTask(id, status);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.deleteTask(id);
    fetchTasks();
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  // App.js
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-3 sm:px-6 py-6">
      {/* Responsive Container */}
      <div className="w-full max-w-md sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        {/* Header */}
        <div className="mb-5 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Task Manager
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm">
            Stay organized, stay productive
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {["all", "pending", "wip", "done"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-md transition ${
                  filter === item
                    ? "bg-black text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <TaskForm onAdd={handleAdd} />

          <TaskList
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
