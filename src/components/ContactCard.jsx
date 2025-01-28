import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="flex justify-center items-center mt-16 px-4">
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
            <p className="text-lg">01611376188</p>
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
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
