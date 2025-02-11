import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">BootCoding</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-gray-200">Our Courses</a></li>
          <li><a href="#" className="hover:text-gray-200">About Us</a></li>
          <li><a href="#" className="hover:text-gray-200">Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 py-2 text-center">
          <li><a href="#" className="block py-2">Our Courses</a></li>
          <li><a href="#" className="block py-2">About Us</a></li>
          <li><a href="#" className="block py-2">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;