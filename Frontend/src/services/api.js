import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const getTasks = () => API.get("/tasks");
export const createTask = (data) => API.post("/task", data);
export const updateTask = (id, status) => {
  API.patch(`/task/${id}`, { status });
};
export const deleteTask = (id) => API.delete(`/task/${id}`);
