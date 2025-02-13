import { useState } from "react";
import { MdDescription } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabData = [
    { key: "description", label: "Description", icon: <MdDescription size={20} /> },
    { key: "pricing", label: "Pricing", icon: <FaDollarSign size={20} /> },
    { key: "info", label: "Info", icon: <AiOutlineInfoCircle size={20} /> },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Upper Section - Video */}
      <div className="flex justify-center">
        <video
          className="w-full max-w-3xl rounded-lg shadow-lg"
          controls
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Lower Section - Tabs */}
      <div className="mt-6">
        {/* Tabs with Icons */}
        <div className="flex justify-center space-x-6 border-b-2 pb-2">
          {tabData.map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 text-lg flex items-center space-x-2 ${
                activeTab === tab.key ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4 p-4 border rounded-lg shadow-md">
          {activeTab === "description" && (
            <p className="text-gray-700">
              This is a great course that covers full-stack development with modern tools.
            </p>
          )}
          {activeTab === "pricing" && (
            <p className="text-gray-700">
              Pricing starts at <strong>$99</strong> for full access.
            </p>
          )}
          {activeTab === "info" && (
            <p className="text-gray-700">
              This course includes hands-on projects, certificates, and 24/7 support.

            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;