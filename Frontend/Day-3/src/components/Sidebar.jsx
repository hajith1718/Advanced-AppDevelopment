import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-64 flex flex-col justify-between">
      <div className="py-6">
        <Link to="/admindb" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
        <Link to="/admindb/managelistings" className="block px-4 py-2 hover:bg-gray-700">Manage Listings</Link>
        <Link to="/admindb/managebookings" className="block px-4 py-2 hover:bg-gray-700">Manage Bookings</Link>
        <Link to="/admindb/analytics" className="block px-4 py-2 hover:bg-gray-700">Analytics</Link>
      </div>
      <div className="py-6">
        <Link to="/login" className="block px-4 py-2 hover:bg-gray-700">Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
