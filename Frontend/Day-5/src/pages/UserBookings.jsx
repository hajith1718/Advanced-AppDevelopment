import React, { useState } from 'react';

const UserBookings = () => {
  // Sample data for available houseboats
  const [houseboats, setHouseboats] = useState([
    {
      id: 1,
      name: "Luxury Houseboat with Panoramic Views",
      location: "Kochi, Kerala, India",
      price: "₹3000/night",
      image: "https://res.cloudinary.com/dfrc94azr/image/upload/v1710761384/3c_s1qxmx.jpg",
      availability: "Available"
    },
    {
      id: 2,
      name: "Modern Floating Villa with Private Deck",
      location: "Kashmir, India",
      price: "₹4000/night",
      image: "https://res.cloudinary.com/dfrc94azr/image/upload/v1710761522/welcomheritage-gurkha_gbsous.jpg",
      availability: "Available"
    },
    // Add more houseboats as needed
  ]);

  // State for new booking form
  const [newBooking, setNewBooking] = useState({
    guestName: '',
    checkIn: '',
    checkOut: '',
    totalPrice: '',
    status: 'Confirmed'
  });

  // Function to handle changes in the new booking form fields
  const handleNewBookingChange = (e) => {
    const { name, value } = e.target;
    setNewBooking(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to add a new booking
  const handleAddBooking = (e) => {
    e.preventDefault();
    // Add your logic to handle new bookings
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book your Dream Houseboats</h1>

      {/* Available houseboats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {houseboats.map(houseboat => (
          <div key={houseboat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={houseboat.image} alt={houseboat.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{houseboat.name}</h2>
              <p className="text-gray-700 mb-2">{houseboat.location}</p>
              <p className="text-gray-700 mb-2">{houseboat.price}</p>
              <p className="text-gray-700 mb-2">Availability: {houseboat.availability}</p>
              {/* Add a button to book houseboat */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add new booking form (if needed) */}
    </div>
  );
}

export default UserBookings;
