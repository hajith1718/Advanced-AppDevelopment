import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome to Houseboat Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Manage Listings</h2>
              <p className="text-gray-700">Add, edit, or remove listings for houseboats available for rent.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Manage Bookings</h2>
              <p className="text-gray-700">View and manage bookings made by customers.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Messages</h2>
              <p className="text-gray-700">Read and respond to messages from customers.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Analytics</h2>
              <p className="text-gray-700">Track website performance and user interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
