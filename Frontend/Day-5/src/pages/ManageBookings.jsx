import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BookingCard from '../components/BookingCard'; // Assuming you have a BookingCard component
import './mb.css';
const ManageBookings = () => {
  // Sample data for bookings
  const [bookings, setBookings] = useState([
    {
      id: 1,
      guestName: "Mohamed Haaris",
      checkIn: "2024-03-20",
      checkOut: "2024-03-25",
      totalPrice: "₹1500",
      status: "Confirmed",
    },
    {
      id: 2,
      guestName: "Manas VM",
      checkIn: "2024-04-10",
      checkOut: "2024-04-15",
      totalPrice: "₹1800",
      status: "Pending",
    },
  ]);

  // State for new booking form fields
  const [newBooking, setNewBooking] = useState({
    guestName: '',
    checkIn: '',
    checkOut: '',
    totalPrice: '',
    status: '',
  });

  // Function to handle form submission for adding a new booking
  const handleAddBooking = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1; // Generate a random ID
    const updatedBookings = [...bookings, { ...newBooking, id }];
    setBookings(updatedBookings);
    setNewBooking({
      guestName: '',
      checkIn: '',
      checkOut: '',
      totalPrice: '',
      status: '',
    });
  };

  // Function to handle input changes for the new booking form
  const handleNewBookingChange = (e) => {
    const { name, value } = e.target;
    setNewBooking({ ...newBooking, [name]: value });
  };

  // Function to delete a booking
  const handleDeleteBooking = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100 scrollbar-hide overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Manage Bookings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map(booking => (
            <BookingCard key={booking.id} booking={booking} onDelete={handleDeleteBooking} />
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Booking</h2>
          <form onSubmit={handleAddBooking} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="guestName" className="block text-gray-700 text-sm font-bold mb-2">Guest Name</label>
              <input type="text" id="guestName" name="guestName" value={newBooking.guestName} onChange={handleNewBookingChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="checkIn" className="block text-gray-700 text-sm font-bold mb-2">Check-In Date</label>
              <input type="date" id="checkIn" name="checkIn" value={newBooking.checkIn} onChange={handleNewBookingChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="checkOut" className="block text-gray-700 text-sm font-bold mb-2">Check-Out Date</label>
              <input type="date" id="checkOut" name="checkOut" value={newBooking.checkOut} onChange={handleNewBookingChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="totalPrice" className="block text-gray-700 text-sm font-bold mb-2">Total Price</label>
              <input type="text" id="totalPrice" name="totalPrice" value={newBooking.totalPrice} onChange={handleNewBookingChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">Status</label>
              <input type="text" id="status" name="status" value={newBooking.status} onChange={handleNewBookingChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Booking</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManageBookings;
