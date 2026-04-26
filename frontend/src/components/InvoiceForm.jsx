import { useState } from "react";
import API from "../services/api";

export default function InvoiceForm() {
  const [data,setData] = useState({ amount:"", description:"" });

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await API.post("/invoices/create", data);
    alert("Created");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 mt-4">
      <h3>Create Invoice</h3>
      <input className="border p-2 w-full mb-2" placeholder="Amount"
        onChange={(e)=>setData({...data,amount:e.target.value})}/>
      <input className="border p-2 w-full mb-2" placeholder="Description"
        onChange={(e)=>setData({...data,description:e.target.value})}/>
      <button className="bg-blue-500 text-white px-4 py-2">Create</button>
    </form>
  );
}