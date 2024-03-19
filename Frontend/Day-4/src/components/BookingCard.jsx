import React from 'react';

const BookingCard = ({ booking, onDelete }) => {
  const { id, guestName, checkIn, checkOut, totalPrice, status } = booking;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Booking #{id}</h2>
        <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-700 font-bold">Delete</button>
      </div>
      <p className="text-gray-700 mb-2"><span className="font-bold">Guest Name:</span> {guestName}</p>
      <p className="text-gray-700 mb-2"><span className="font-bold">Check-In:</span> {checkIn}</p>
      <p className="text-gray-700 mb-2"><span className="font-bold">Check-Out:</span> {checkOut}</p>
      <p className="text-gray-700 mb-2"><span className="font-bold">Total Price:</span> {totalPrice}</p>
      <p className="text-gray-700 mb-2"><span className="font-bold">Status:</span> {status}</p>
    </div>
  );
}

export default BookingCard;
