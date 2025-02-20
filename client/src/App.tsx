import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";
import TaskList from "./components/TaskList";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <strong>Create link to Homepage</strong>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        {/* Create Path to TaskDetail */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
