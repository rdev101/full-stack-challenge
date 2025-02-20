import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { Task } from "./types";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const tasks: Task[] = [{ id: 1, title: "First task" }];

app.get("/tasks", (_req: Request, res: Response) => {
  res.send(tasks);
});

app.get("/tasks/:id", (req: any, res: any) => {
  // Create a GET endpoint to Get Task with specific ID
  // If not found return 404 "Task not found"
});

app.post("/create-task", (req: any, res: any) => {
  // Create a ADD endpoint to Add a Task
  // Add validation to the request body
});

// Create a DELETE Endpoint to Remove a Task

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
