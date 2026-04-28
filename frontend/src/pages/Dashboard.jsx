import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import Loader from "../components/Loader";
import { request } from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("ALL"); // ✅ ADDED

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await request("/tasks");
      setTasks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    if (!title.trim()) return;
    const newTask = await request("/tasks", "POST", { title });
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = async (id) => {
    await request(`/tasks/${id}`, "DELETE");
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTask = async (task) => {
    const updated = await request(`/tasks/${task.id}`, "PUT", {
      status: task.status === "Pending" ? "Completed" : "Pending",
    });

    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? updated : t))
    );
  };

  // ✅ FILTER LOGIC
  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") return task.status === "Completed";
    if (filter === "PENDING") return task.status === "Pending";
    return true;
  });

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <Sidebar filter={filter} setFilter={setFilter} />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 max-w-4xl mx-auto w-full"
        >
          <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

          <TaskInput onAdd={addTask} />

          {loading ? (
            <Loader />
          ) : filteredTasks.length === 0 ? (
            <p className="text-gray-400 mt-6 text-center">
              No tasks found
            </p>
          ) : (
            <div className="mt-6 space-y-4">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onToggle={toggleTask}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}