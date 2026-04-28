import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/register", data);
      alert("Registered Successfully");
      nav("/"); // 🔥 back to login
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          className="border p-2 w-full mb-3 rounded"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

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

        <button className="bg-green-500 hover:bg-green-600 text-white w-full p-2 rounded">
          Register
        </button>

        {/* 🔥 LOGIN LINK */}
        <p className="text-sm text-center mt-4">
          Already have account?{" "}
          <span
            onClick={() => nav("/")}
            className="text-blue-500 cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}