import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactCard = () => {
  return (
    <div className="flex justify-center items-center my-16 px-4">
      <div className="card bg-slate-900 text-white w-full max-w-lg shadow-xl rounded-lg">
        <div className="card-body space-y-8">
          {/* Card Title */}
          <h2 className="text-3xl font-bold text-center text-rose-500">
            Contact Me
          </h2>

          {/* Email Option */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <FaEnvelope className="text-2xl text-blue-500 flex-shrink-0" />
            <a
              href="mailto:asifahmed18oct@gmail.com"
              className="text-lg hover:underline hover:text-blue-400"
            >
              asifahmed18oct@gmail.com
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <FaPhone className="text-2xl text-green-500 flex-shrink-0" />
            <a href="tel:+1234567890" className=" hover:underline">
              +8801611376188
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <FaWhatsapp className="text-2xl text-green-400 flex-shrink-0" />
            <a
              href="https://wa.me/1611376188"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline hover:text-green-300"
            >
              Chat on WhatsApp
            </a>

          </div>
          <Link to={'/contact'}>
            <button
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-lg">Direct Message

            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
