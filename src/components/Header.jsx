import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import photo from '../assets/photo.png';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Header = () => {
  // Fade-in animation for the image and text
  const fadeInProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });
  const slideInTextProps = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-100px)' }, delay: 500 });
  const slideInImgProps = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(100px)' }, delay: 500 });
  const zoomInProps = useSpring({ transform: 'scale(1)', from: { transform: 'scale(0.8)' }, delay: 800 });

  return (
    <div className="hero min-h-screen px-4 sm:px-8 lg:px-16 mt-16 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">
        {/* Image Section */}
        <animated.img
          src={photo}
          alt="Asif Ahmed"
          className="w-4/6 sm:w-3/6 lg:w-2/6 rounded-lg shadow-2xl"
          style={slideInImgProps}
        />

        {/* Content Section */}
        <div className="text-center lg:text-left mt-8 lg:mt-20 lg:mr-8">
          {/* Title */}
          <animated.h1 className="text-4xl sm:text-5xl font-bold" style={slideInTextProps}>
            <span className="text-orange-500">Hello</span>
            <br />
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am Asif Ahmed")
                  .pauseFor(2500)
                  .pauseFor(1000)
                  .start();
              }}
            />
          </animated.h1>

          {/* Description */}
          <animated.p className="py-6 text-lg leading-relaxed" style={fadeInProps}>
          I am a dedicated Web Developer in Front-End Development, specializing in React.js and proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js). My passion for web development drives me to create efficient, responsive, and user-friendly applications. While my primary focus has been on front-end development—crafting visually appealing and interactive user interfaces—I am equally enthusiastic about exploring back-end development.
          </animated.p>

          {/* Social Media Icons */}
          <animated.div className="flex justify-center lg:justify-start space-x-4 mb-6" style={zoomInProps}>
            <a href="https://github.com/asifahmed1810" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/asif-ahmed-a2a60226a" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100011541277428" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <FaFacebook />
            </a>
          </animated.div>

          {/* Resume Button */}
          <a
            className="btn btn-neutral px-6 py-3 font-medium"
            href="https://drive.google.com/uc?export=download&id=14INRE_HNzFMKyUdF0gypEp3JPNebmVwK"
            style={fadeInProps}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
