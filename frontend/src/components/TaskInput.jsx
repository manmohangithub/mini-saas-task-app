import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <div className="flex gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 p-3 bg-gray-800/60 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={() => {
          onAdd(title);
          setTitle("");
        }}
        className="bg-blue-600 px-6 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Add
      </button>
    </div>
  );
}