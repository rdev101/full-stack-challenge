import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Task } from "../utils/Interfaces";

function TaskDetail() {
  // Get the ID using the 'react-router-dom'
  const id = parseInt("GET FROM URL PARAM");
  const dispatch = useDispatch();
  const task: Task | null = useSelector((state: RootState) => {
    return state.tasks.tasks.find((task) => task.id === id) || null;
  });

  useEffect(() => {
    // Fetch the details based on ID
  }, []);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <p>Task Id</p>
      <p>Task Title</p>
    </div>
  );
}

export default TaskDetail;
