import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white/5 backdrop-blur-lg border-b border-white/10">

      <h1 className="text-xl font-bold tracking-wide">
        ⚡ TaskFlow
      </h1>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
        className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
}