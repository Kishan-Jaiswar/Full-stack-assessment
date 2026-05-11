import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  fetchTasksInDescendingOrder,
} from "../controller/task.js";

const router = express.Router();

router.post("/task", createTask);
router.get("/tasks", getTasks);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);
router.get("/tasksInDescendingOrder", fetchTasksInDescendingOrder);

export default router;
