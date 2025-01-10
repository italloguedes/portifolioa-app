import React from 'react';
import StarryBackground from './StarryBackground';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
<div className="relative w-full h-screen bg-black">
  <StarryBackground />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center animate-fade-in">
      <h1 className="text-white text-6xl font-extrabold mb-4 drop-shadow-glow">404</h1>
      <p className="text-white text-xl mb-8">Sorry, the page you're looking for cannot be found.</p>
      <Link className="text-[#025eff] text-2xl underline hover:no-underline transition duration-300" to={"/"}>
      Go Back Home
      </Link>
    </div>
  </div>
</div>

  );
};

export default NotFound;
