import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: String,
    status: {
      type: String,
      enum: ["wip", "pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true },
);

export const Task = mongoose.model("Task", taskSchema);
