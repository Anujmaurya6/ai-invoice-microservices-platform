import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/users/login", data);
    localStorage.setItem("token", res.data.token);
    nav("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="border p-6 rounded w-80">
        <h2 className="text-lg mb-4">Login</h2>
        <input className="border p-2 w-full mb-2" placeholder="Email"
          onChange={(e)=>setData({...data,email:e.target.value})}/>
        <input type="password" className="border p-2 w-full mb-2" placeholder="Password"
          onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button className="bg-blue-500 text-white w-full p-2">Login</button>
      </form>
    </div>
  );
}