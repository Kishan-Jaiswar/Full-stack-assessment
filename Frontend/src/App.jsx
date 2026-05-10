// App.js
import { lazy, useEffect, useState } from "react";
import TaskForm from "./components/TaskFrom";
import TaskList from "./components/TaskList";
import * as api from "./services/api";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
const TaskManager = lazy(() => import("./Modules/TaskManager/Main"));
const NewPage = lazy(() => import("./Modules/NewPage/Index"));

function App() {
  return (
    <div className="bg-green">
      <BrowserRouter>
        <Routes>
          <Route path="/taskManager" element={<TaskManager />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
