import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const API_URL = "https://task-manager-app-q7hm.onrender.com";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(`${API_URL}/api/tasks`, config);
      setTasks(response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    try {
      setError("");
      await axios.post(`${API_URL}/api/tasks`, task, config);
      getTasks();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      setError("");
      await axios.delete(`${API_URL}/api/tasks/${id}`, config);
      getTasks();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete task");
    }
  };

  const updateStage = async (id, stage) => {
    try {
      setError("");
      await axios.put(`${API_URL}/api/tasks/${id}`, { stage }, config);
      getTasks();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update task");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const stages = ["Todo", "In Progress", "Done"];

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>Task Manager Dashboard</h1>

        <TaskForm addTask={addTask} />

        {loading && <p className="loading">Loading tasks...</p>}
        {error && <p className="error">{error}</p>}

        <div className="task-board">
          {stages.map((stage) => (
            <div className="task-column" key={stage}>
              <h2>{stage}</h2>

              {tasks.filter((task) => task.stage === stage).length === 0 && (
                <p className="empty-text">No tasks</p>
              )}

              {tasks
                .filter((task) => task.stage === stage)
                .map((task) => (
                  <TaskCard
                    key={task._id}
                    task={task}
                    deleteTask={deleteTask}
                    updateStage={updateStage}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;