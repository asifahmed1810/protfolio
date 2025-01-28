import React from 'react';

const AboutMe = () => {
  return (
    <div className="mt-16 px-4">
      {/* Title */}
      <div>
        <h2 className="text-4xl font-bold text-center text-orange-600">
          About Me
        </h2>
      </div>

      {/* Content */}
      <div className="mt-8 mx-auto space-y-4 text-lg leading-relaxed text-center text-gray-200 max-w-xl">
        <p>
          My hobby is playing football, which keeps me active and energized. My
          goal is to become a skilled software engineer, creating innovative
          solutions to real-world problems.
        </p>
        <p>
          My journey into web development began with Programming Hero, where I
          discovered my passion for coding and building modern web applications.
        </p>
        <p>
          This is just the beginning of an exciting adventure in the tech
          world!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
