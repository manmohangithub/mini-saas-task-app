import { useState } from "react";
import { request } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignup = async () => {
    await request("/auth/signup", "POST", form);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white/10 p-8 rounded-xl w-96">

        <h2 className="text-2xl mb-4">Signup</h2>

        <input
          placeholder="Email"
          className="w-full p-3 mb-3 bg-gray-800 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 bg-gray-800 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 p-3 rounded"
        >
          Signup
        </button>
      </div>
    </div>
  );
}