import { motion } from "framer-motion";
import { FaTasks, FaCheckCircle, FaClock } from "react-icons/fa";

export default function Sidebar({ filter, setFilter }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-black/40 backdrop-blur-xl p-6 border-r border-white/10 hidden md:block"
    >
      <h2 className="text-2xl font-bold mb-10">⚡ TaskFlow</h2>

      <ul className="space-y-6 text-gray-300">

        {/* ALL */}
        <li
          onClick={() => setFilter("ALL")}
          className={`flex gap-3 cursor-pointer ${
            filter === "ALL" ? "text-blue-400" : "hover:text-blue-400"
          }`}
        >
          <FaTasks /> All Tasks
        </li>

        {/* COMPLETED */}
        <li
          onClick={() => setFilter("COMPLETED")}
          className={`flex gap-3 cursor-pointer ${
            filter === "COMPLETED"
              ? "text-green-400"
              : "hover:text-green-400"
          }`}
        >
          <FaCheckCircle /> Completed
        </li>

        {/* PENDING */}
        <li
          onClick={() => setFilter("PENDING")}
          className={`flex gap-3 cursor-pointer ${
            filter === "PENDING"
              ? "text-yellow-400"
              : "hover:text-yellow-400"
          }`}
        >
          <FaClock /> Pending
        </li>
      </ul>
    </motion.div>
  );
}