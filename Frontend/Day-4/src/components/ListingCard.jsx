import React from 'react';

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <img src={listing.image} alt={listing.title} className="rounded-t-lg w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{listing.title}</h2>
        <p className="text-gray-700 mb-2">{listing.location}</p>
        <p className="text-gray-700 font-bold">{listing.price}</p>
      </div>
    </div>
  );
}

export default ListingCard;
