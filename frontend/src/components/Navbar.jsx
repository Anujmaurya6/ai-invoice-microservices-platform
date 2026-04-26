import React from 'react'
import {logout} from '../utils/auth';

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-200">
      <h2>Invoice App</h2>
      <button onClick={logout} className="bg-red-500 text-white px-3">Logout</button>
    </div>
  );
}
export default Navbar