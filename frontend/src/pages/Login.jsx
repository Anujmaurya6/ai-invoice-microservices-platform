import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", data);
      localStorage.setItem("token", res.data.token);
      nav("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button className="bg-blue-500 hover:bg-blue-600 text-white w-full p-2 rounded">
          Login
        </button>

        {/* 🔥 IMPORTANT LINK */}
        <p className="text-sm text-center mt-4">
          First time user?{" "}
          <span
            onClick={() => nav("/register")}
            className="text-blue-500 cursor-pointer font-semibold"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}