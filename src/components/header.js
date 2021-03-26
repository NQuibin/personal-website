import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import ParticlesContainer from '@components/particlesContainer';

const Header = () => {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <ParticlesContainer>
      <h1
        className="flex flex-col justify-center m-4 text-white nq-text-shadow"
        data-aos="fade-down"
      >
        <span className="text-4xl">Hello, I'm</span>
        <span className="text-purple-700">Nikki Quibin,</span>
        <span className="text-4xl">Software Developer</span>
        <button
          className="self-center mt-12 bg-purple-700 rounded-full shadow-md hover:bg-purple-500 focus:outline-none"
          onClick={handleClick}
        >
          <FaCaretDown />
        </button>
      </h1>
    </ParticlesContainer>
  );
};

export default Header;
