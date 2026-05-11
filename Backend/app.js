import express from "express";
import cors from "cors";
import taskRoutes from "./route/task.js";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnection.js";
import { corsOptions } from "./config/corsConfig.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/v1", taskRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
