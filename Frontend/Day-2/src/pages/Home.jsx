import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
  return (
   <>
   <div className="w-full">
      <div class="w-full">
        <img src="https://res.cloudinary.com/dc8kig0rh/image/upload/v1710566011/111_1_v48tzu.jpg" className='h-[54rem] w-full'></img>
        <div className='absolute grid grid-cols-8 top-[13rem] space-y-7'>
          <div className='col-start-6 col-span-6 text-5xl font-serif align-left'><h1><i>BOAT VOYAGER..</i></h1></div>
          <div className='flex flex-col justify-center items-center space-y-24'>
          <div className='col-start-4 col-span-6 w-[58rem] ml-[97rem] text-rose-50 text-6xl px-3 py-3 font-serif bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'><p><i>‘Home is where the anchor drops’</i></p></div>
          <div className='col-start-2 col-span-1 h-[28rem] w-[28rem] mt-[10rem] ml-[40rem] bg-white font-serif my-1 text-xl px-3 py-3 dark:text-blue-500/100'><b>Experience the Cruise from Expert</b><br></br><br></br>Lush greenery, perfect beaches and the calm tranquil of houseboats on serene backwaters – Kerala is nature's way of bestowing God's bounties on human beings. Soak into the beauty of Alleppey and Kumarakom's backwaters with Cruise Land, Kerala's premium houseboat services.Cruise Land is a key network member of Kerala's tourism sector and enables the best houseboat experience to our customers that come in from all around the world. We bring the best of the 1500 km network of backwaters across the state and bring to you holidays that you can truly cherish for years</div> 
          <Link to="/Login" className="absolute ml-[120rem] inline-flex items-center justify-center px-8 py-4  h-[6rem] w-[20rem] font-bold text-white  transition-all duration-200 bg-blue-500/100 font-pj rounded-xl border-4 border-red-200 text-3xl">Book Now</Link>
        </div>
        </div>
      </div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:mr-8 mb-8 md:mb-0">
              <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1710566094/wallpaperflare.com_wallpaper_8_owqp4x.jpg" alt="About" className="w-full h-auto rounded-lg" />
            </div>
            <div className="md:w-1/1">
              <p className="text-lg mb-4">At Boating Paradise, we're passionate about providing you with the best boating experience. Whether you're a seasoned sailor or new to the water, we have the perfect vessel for your adventure.</p>
              <p className="text-lg">Our fleet consists of top-of-the-line boats equipped with modern amenities and safety features. Join us and embark on a journey you'll never forget.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Boat Rentals</h3>
              <p className="text-lg">Choose from our diverse range of boats for rent, suitable for any occasion or preference.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Guided Tours</h3>
              <p className="text-lg">Explore the wonders of the water with our experienced guides leading the way.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Events & Charters</h3>
              <p className="text-lg">Host your special events or celebrations aboard our luxurious charter boats.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <blockquote className="text-lg">"An unforgettable experience! The boat was in impeccable condition, and the staff were friendly and accommodating. Highly recommended!"</blockquote>
              <cite className="block mt-4 text-gray-500">- Mohamed Haaris</cite>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <blockquote className="text-lg">"I booked a guided tour with Boating Paradise, and it exceeded all my expectations. The scenery was breathtaking, and the captain was knowledgeable. Will definitely come back!"</blockquote>
              <cite className="block mt-4 text-gray-500">- Manas</cite>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <p className="text-lg text-center mb-8">Have questions or ready to book your next adventure? Reach out to us today!</p>
          <div className="flex justify-center">
            <Link to="/contact"><p className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300" >Contact Us</p></Link>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Boating Voyager. All rights reserved.</p>
        </div>
      </footer>
     
    </div>
    </>
  )
}

export default Landing;