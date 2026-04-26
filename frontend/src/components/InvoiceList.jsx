import { useEffect, useState } from "react";
import API from "../services/api";

export default function InvoiceList() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    API.get("/invoices").then(res=>setData(res.data));
  },[]);

  return (
    <div className="border p-4 mt-4">
      <h3>Invoices</h3>
      {data.map(i=>(
        <div key={i._id} className="border p-2 mt-2">
          ₹{i.amount} - {i.description}
        </div>
      ))}
    </div>
  );
}