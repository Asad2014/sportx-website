

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div>
        <Image 
          src="/backgroundimage.jpg" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome To SportX</h1>
        <p className="text-lg md:text-2xl mb-6">Experience Feel Greatest With New Collection</p>
        <button className="bg-blue-500 text-black py-2 px-6 rounded-md text-xl hover:bg-gray-700 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;

