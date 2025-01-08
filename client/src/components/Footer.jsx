import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiReact, SiVite, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg font-semibold">Developed by Me_DevRob</p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/roberto.prisoris"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/me_robbb/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com/@your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaTiktok className="w-6 h-6" />
            </a>
          </div>

          {/* Technology Icons */}
          <div className="flex space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <SiReact className="w-6 h-6 text-[#61DAFB]" />
              <SiVite className="w-6 h-6 text-[#646CFF]" />
              <SiTailwindcss className="w-6 h-6 text-[#38B2AC]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
