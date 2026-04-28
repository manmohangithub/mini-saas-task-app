import { motion } from "framer-motion";

export default function TaskCard({ task, onDelete, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 p-5 rounded-xl flex justify-between items-center backdrop-blur-lg shadow"
    >
      <div>
        <p
          className={`text-lg ${
            task.status === "Completed"
              ? "line-through text-gray-400"
              : ""
          }`}
        >
          {task.title}
        </p>

        <span
          className={`text-xs px-2 py-1 rounded ${
            task.status === "Completed"
              ? "bg-green-500/20 text-green-300"
              : "bg-yellow-500/20 text-yellow-300"
          }`}
        >
          {task.status}
        </span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => onToggle(task)}
          className="bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 transition"
        >
          ✓
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 transition"
        >
          ✕
        </button>
      </div>
    </motion.div>
  );
}