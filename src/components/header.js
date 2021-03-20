import React, { useRef } from 'react';
import Particles from 'react-particles-js';
import { TiArrowSortedDown } from 'react-icons/ti';

const Header = () => {
  const headerRef = useRef(null);
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  };

  return (
    <header
      className="relative flex items-center justify-center text-center bg-purple-400 h-screen nq-bg-gradient-purple"
      ref={headerRef}
    >
      <div className="absolute rounded-lg">
        <h1
          className="flex flex-col justify-center m-4 text-white nq-text-shadow"
          data-aos="fade-down"
        >
          <span className="text-4xl">Hello, I'm</span>
          <span className="text-purple-700">Nikki Quibin,</span>
          <span className="text-4xl">Software Developer</span>
          <button className="self-center mt-12 focus:outline-none" onClick={handleClick}>
            <TiArrowSortedDown
              style={{ filter: 'drop-shadow(1px 1px rgba(0, 0, 0, 0.5))' }}
            />
          </button>
        </h1>
      </div>
      <Particles
        className="h-screen w-screen"
        params={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          particles: {
            number: {
              value: 150,
              density: {
                enable: false,
              },
            },
            size: {
              value: 4,
              random: true,
            },
            move: {
              direction: null,
              speed: 2,
            },
            line_linked: {
              enable: false,
            },
            shape: {
              type: 'circle',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
            },
            modes: {
              bubble: {
                size: 12,
                opacity: 1,
              },
            },
          },
        }}
      />
    </header>
  );
};

export default Header;
