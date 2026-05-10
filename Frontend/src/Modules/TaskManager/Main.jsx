import React, { useEffect, useState } from "react";
import * as api from "../../services/api";
import TaskForm from "../../components/TaskFrom";
import TaskList from "../../components/TaskList";

const Main = () => {
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
    setTasks((prev) =>
      prev.map((task) => (task._id === id ? { ...task, status } : task)),
    );

    try {
      await api.updateTask(id, status);
    } catch (err) {
      // rollback if API fails
      fetchTasks();
    }
  };

  const handleDelete = async (id) => {
    await api.deleteTask(id);
    fetchTasks();
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div className="min-h-screen bg-[#f8fafc] px-3 py-4 sm:px-5 sm:py-8">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Task Manager
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Organize your work beautifully
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-3 sm:p-6">
          {/* Create Task Section */}
          <div className="">
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-4 sm:p-6">
              <div className="mb-5">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Create New Task
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Add title and description for your task
                </p>
              </div>

              <TaskForm onAdd={handleAdd} />
            </div>
          </div>

          {tasks?.length && (
            <>
              <div className="my-6 border-t border-gray-400" />

              {/* Filters */}
              <div className="flex gap-2 p-1.5 bg-gray-100 rounded-2xl overflow-x-auto scrollbar-hide">
                {["all", "pending", "wip", "done"].map((item) => {
                  const isActive = filter === item;

                  return (
                    <button
                      key={item}
                      onClick={() => setFilter(item)}
                      className={`min-w-fit flex-1 whitespace-nowrap px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-gray-900 text-white shadow-md"
                      : "text-gray-500 hover:bg-white hover:text-black"
                  }
                `}
                    >
                      {item.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Task List Section */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Your Tasks
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Track and manage your workflow
                    </p>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-400">
                    {filteredTasks.length} Tasks
                  </div>
                </div>

                <div className="max-h-[420px] overflow-y-auto pr-1">
                  <TaskList
                    tasks={filteredTasks}
                    filter={filter}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
