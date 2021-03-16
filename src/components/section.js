import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children, bgClass = '', contentClass = '' }) => {
  return (
    <div className={bgClass}>
      <section
        aria-label={title}
        className={'mx-auto px-10 py-20 lg:container ' + contentClass}
      >
        <h2 className="mb-10 text-purple-700 text-center" data-aos="fade-down">
          {title}
        </h2>
        {children}
      </section>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
