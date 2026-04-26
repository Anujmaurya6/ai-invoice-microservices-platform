import { useState } from "react";
import API from "../services/api";

export default function Register() {
  const [data, setData] = useState({ name:"", email:"", password:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/users/register", data);
    alert("Registered");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="border p-6 rounded w-80">
        <h2 className="text-lg mb-4">Register</h2>
        <input className="border p-2 w-full mb-2" placeholder="Name"
          onChange={(e)=>setData({...data,name:e.target.value})}/>
        <input className="border p-2 w-full mb-2" placeholder="Email"
          onChange={(e)=>setData({...data,email:e.target.value})}/>
        <input type="password" className="border p-2 w-full mb-2" placeholder="Password"
          onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button className="bg-green-500 text-white w-full p-2">Register</button>
      </form>
    </div>
  );
}