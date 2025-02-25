import axios from "axios";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Task } from "../utils/Interfaces";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks from the backend when the component MOUNTS
  axios.get<Task[]>("/tasks");
  // Update the Redux state with the fetched tasks

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask) {
      axios.post<Task>("/create-task", { title: newTask });
      // Handle adding a new task
      // Update the Redux state with the new task
      // Clear the input field
    }
  };

  return (
    <div>
      <h1>New Task</h1>
      <p>
        <strong>Add an input field for the new task title</strong>
        <strong> - </strong>
        <strong>Add a button to trigger the `handleAddTask` function </strong>
      </p>
      <h1>Task List</h1>
      <ul>
        <div>
          <strong>Render the list of tasks</strong>
          <strong> - </strong>
          {/* Add DELETE function */}
          <Trash2 onClick={() => console.log("DELETE")} />
        </div>
      </ul>
    </div>
  );
}

export default TaskList;
