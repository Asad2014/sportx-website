
import React from 'react';
import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-blue-500 text-black w-full h-auto md:h-16">
      <h1 className="text-2xl font-bold">SportX</h1>
      <nav className="flex flex-col md:flex-row md:space-x-6 font-bold pt-4 md:pt-0 items-center space-y-2 md:space-y-0">
        <Link href="/" className="hover:text-gray-700 px-2 py-1">Home</Link>
        <Link href="About" className="hover:text-gray-700 px-2 py-1">About</Link>
        <Link href="Products" className="hover:text-gray-700 px-2 py-1">Products</Link>
        <Link href="Contact" className="hover:text-gray-700 px-2 py-1">Contact</Link>
        {/* Cart icon */}
        <button className="text-black hover:text-gray-700 px-2 py-1">
          <FaCartShopping style={{ fontSize: '20px' }} />
        </button>
      </nav>
    </header>
  );
};

export default Header;

