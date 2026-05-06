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

  return (
    <div className="min-h-screen bg-[#f8fafc] flex justify-center px-4 py-8">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Task Manager
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Organize your work beautifully
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          {/* Filters */}
          <div className="flex justify-between mb-5 bg-gray-100 p-1 rounded-lg">
            {["all", "pending", "wip", "done"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`flex-1 text-xs py-2 rounded-md transition ${
                  filter === item
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <TaskForm onAdd={handleAdd} />

          <TaskList
            tasks={filteredTasks}
            filter={filter}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
