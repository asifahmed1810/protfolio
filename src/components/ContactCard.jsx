import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactCard = () => {
  return (
    <div className="flex justify-center items-center my-16 px-4 overflow-hidden w-full">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white w-full max-w-lg shadow-2xl rounded-xl p-8">
        {/* Card Title */}
        <h2 className="text-3xl font-extrabold text-center text-rose-500 mb-6">Contact Me</h2>
        
        <div className="space-y-6">
          {/* Email Option */}
          <div className="flex items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition w-full overflow-hidden">
            <FaEnvelope className="text-2xl text-blue-400 mr-4 flex-shrink-0" />
            <a
              href="mailto:asifahmed18oct@gmail.com"
              className="text-lg hover:underline hover:text-blue-300 truncate"
            >
              asifahmed18oct@gmail.com
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition w-full overflow-hidden">
            <FaPhone className="text-2xl text-green-400 mr-4 flex-shrink-0" />
            <a href="tel:+8801611376188" className="text-lg hover:underline truncate">
              +8801611376188
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition w-full overflow-hidden">
            <FaWhatsapp className="text-2xl text-green-300 mr-4 flex-shrink-0" />
            <a
              href="https://wa.me/1611376188"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline hover:text-green-200 truncate"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link to={'/contact'}>
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-lg shadow-md transition">
              Direct Message
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
