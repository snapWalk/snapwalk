import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({
  content
}) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          {content}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  content: PropTypes.node.isRequired
};

export default Hero;
