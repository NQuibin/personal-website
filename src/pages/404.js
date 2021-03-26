import React from 'react';
import { navigate } from 'gatsby';
import { FiChevronRight } from 'react-icons/fi';
import SEO from '@components/seo';
import ParticlesContainer from '@components/particlesContainer';

const NotFoundPage = () => {
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <SEO title="404: Not found" />
      <main>
        <ParticlesContainer>
          <div className="text-white nq-text-shadow">
            <h1 className="text-purple-700">Uh Oh!</h1>
            <p className="text-4xl">This page does not exist...</p>
            <button
              className="text-2xl text-white bg-purple-700 mt-12 pr-4 pl-6 py-2 rounded-lg shadow-md hover:bg-purple-500 focus:outline-none"
              onClick={handleClick}
            >
              Home
              <FiChevronRight className="inline-flex ml-1 mb-1" />
            </button>
          </div>
        </ParticlesContainer>
      </main>
    </>
  );
};

export default NotFoundPage;
