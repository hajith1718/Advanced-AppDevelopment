import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ListingCard from '../components/ListingCard'; // Assuming you have a ListingCard component
import './mb.css';

const ManageListings = () => {
  // Sample data for existing listings
  const [listings, setListings] = useState([
    {
      id: 1,
      title: "Luxury Houseboat with Panoramic Views",
      location: "Kochi, Kerala, India",
      price: "₹3000/night",
      image: "https://res.cloudinary.com/dfrc94azr/image/upload/v1710761384/3c_s1qxmx.jpg",
    },
    {
      id: 2,
      title: "Modern Floating HouseBoat with Private Deck",
      location: "Kashmir, India",
      price: "₹4000/night",
      image: "https://res.cloudinary.com/dfrc94azr/image/upload/v1710761522/welcomheritage-gurkha_gbsous.jpg",
    },
  ]);

  // State for new listing form fields
  const [newListing, setNewListing] = useState({
    title: '',
    location: '',
    price: '',
    image: '',
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1; // Generate a random ID
    const updatedListings = [...listings, { ...newListing, id }];
    setListings(updatedListings);
    setNewListing({
      title: '',
      location: '',
      price: '',
      image: '',
    });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewListing({ ...newListing, [name]: value });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100 scrollbar-hide overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Manage Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Listing</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input type="text" id="title" name="title" value={newListing.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
              <input type="text" id="location" name="location" value={newListing.location} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
              <input type="text" id="price" name="price" value={newListing.price} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
              <input type="text" id="image" name="image" value={newListing.image} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Listing</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManageListings;
