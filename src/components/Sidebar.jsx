import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar Toggle Button */}
      <button
        className="p-3 bg-blue-600 text-white fixed top-16 left-2 rounded-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full bg-blue-700 text-white w-64 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="p-5 text-2xl font-bold">BootCoding</div>
        <ul className="space-y-4 p-5">
          <li><a href="#" className="block hover:bg-blue-500 p-2 rounded">Our Courses</a></li>
          <li><a href="#" className="block hover:bg-blue-500 p-2 rounded">About Us</a></li>
          <li><a href="#" className="block hover:bg-blue-500 p-2 rounded">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;