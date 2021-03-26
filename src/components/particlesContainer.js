import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

const ParticlesContainer = ({ children }) => {
  return (
    <header className="relative flex items-center justify-center text-center bg-purple-400 h-screen nq-bg-gradient-purple">
      <div className="absolute">{children}</div>
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

ParticlesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ParticlesContainer;
