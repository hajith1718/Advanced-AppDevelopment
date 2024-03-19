import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About Us</h1>
      
      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1710773155/Houseboat_Cruise_In_Alleppey_-_The_Best_To_Experience_xj8ktr.jpg" alt="Team" className="rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Boat Masters is committed to delivering unparalleled boating experiences. 
            Our mission is to provide our customers with top-quality boats and exceptional service, 
            ensuring that every moment spent on the water is memorable and enjoyable.
          </p>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 order-2 md:order-1">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Values</h2>
          <ul className="text-gray-700 leading-relaxed">
            <li className="mb-2">
              <span className="text-blue-600 mr-2">&#8226;</span>
              <span className="font-semibold">Excellence:</span> We strive for excellence in everything we do, 
              from boat selection to customer service.
            </li>
            <li className="mb-2">
              <span className="text-blue-600 mr-2">&#8226;</span>
              <span className="font-semibold">Integrity:</span> We operate with honesty, transparency, 
              and integrity in all our business dealings.
            </li>
            <li className="mb-2">
              <span className="text-blue-600 mr-2">&#8226;</span>
              <span className="font-semibold">Passion:</span> Our team is passionate about boating and 
              dedicated to sharing that passion with our customers.
            </li>
            <li className="mb-2">
              <span className="text-blue-600 mr-2">&#8226;</span>
              <span className="font-semibold">Innovation:</span> We embrace innovation and continuously 
              seek new ways to enhance the boating experience.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
          <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1710566094/wallpaperflare.com_wallpaper_8_owqp4x.jpg" alt="Team" className="rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out" />
        </div>
      </section>
      
      {/* Team Section */}
      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="https://res.cloudinary.com/dfrc94azr/image/upload/v1710772265/White_Colorful_Soft_Photo_Grid_Layout_Mockup_Frame_Set_Moodboard_Photo_Collage_um4hb0.png" alt="Team" className="rounded-lg shadow-md hover:opacity-75 transition duration-300 ease-in-out" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-gray-700 leading-relaxed">
            Our team at Boat Masters is comprised of experienced boating enthusiasts who share a 
            passion for the water. With years of industry knowledge and expertise, we are dedicated 
            to providing personalized service and guidance to help you find the perfect boat for your needs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;









