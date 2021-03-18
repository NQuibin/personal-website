import React from 'react';
import Particles from 'react-particles-js';

const Header = () => {
  return (
    <header className="relative flex items-center justify-center text-center bg-purple-400 h-screen nq-bg-gradient-purple">
      <div className="absolute rounded-lg">
        <h1
          className="flex flex-col justify-center m-4 text-white nq-text-shadow"
          data-aos="fade-down"
        >
          <span className="text-4xl">Hello, I'm</span>
          <span className="text-purple-700">Nikki Quibin,</span>
          <span className="text-4xl">Software Developer</span>
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
              value: 8,
              random: true,
            },
            move: {
              direction: 'bottom',
              out_mode: 'out',
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
