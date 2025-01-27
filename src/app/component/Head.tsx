'use client';
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Link from 'next/link';
import { useParams } from 'next/navigation'; // Correct hook for dynamic parameters in Next.js 13

const Header3 = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle mobile menu
  const { slug } = useParams(); // Access dynamic route parameters using useParams

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="font-medium text-sm sticky top-0 leading-[15.4px] py-3 sm:py-4 text-[#636270] flex flex-col md:flex-row justify-between items-center bg-[#FFFFFF] drop-shadow-sm decoration-[#E1E3E5] px-4 sm:px-0" aria-label="Main header">

      {/* Menu Links (Desktop and Medium Screens) */}
      <nav className="hidden sm:flex md:flex justify-center px-48 space-x-4 sm:space-x-8">
        <Link href="/" className="text-[#007580]" aria-label="Go to homepage">Home</Link>
        <Link href="#" className="text-[#007580]" aria-label="Visit the shop section">Shop</Link>
        <Link href="/products" className="text-[#007580]" aria-label="Browse products">Product</Link>
        <Link href={`/pages/${slug}`} className="text-[#007580]" aria-label={`View pages related to ${slug}`}>Pages</Link>
        <Link href="/about" className="text-[#007580]" aria-label="Learn more about us">About</Link>
      </nav>

      {/* Contact Info (Desktop and Medium Screens) */}
      <div className="flex gap-4 sm:gap-8 px-40">
        <div className="text-center sm:text-left">
          <Link href="/contact" className="hidden lg:block" aria-label="Contact us">Contact: (808) 555-0111</Link>
        </div>
      </div>

      {/* Hamburger Icon (Mobile and Medium Screens) */}
      <div className="sm:hidden md:hidden absolute top-4 right-4">
        <button onClick={toggleMenu} className="text-[#007580]" aria-label="Toggle mobile menu">
          <IoMdMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-[#F0F2F3] w-full text-center text-[#636270] py-4 px-6`}>
        <Link href="/" className="block py-2" aria-label="Go to homepage">Home</Link>
        <Link href="#" className="block py-2" aria-label="Visit the shop section">Shop</Link>
        <Link href="/product" className="block py-2" aria-label="Browse products">Product</Link>
        <Link href={`/pages/${slug}`} className="block py-2" aria-label={`View pages related to ${slug}`}>Pages</Link>
        <Link href="/about" className="block py-2" aria-label="Learn more about us">About</Link>
        <Link href="/contact" className="block py-2" aria-label="Contact us">Contact: (808) 555-0111</Link>
      </div>
    </header>
  );
};

export default Header3;
