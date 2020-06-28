import React from 'react';
import PropTypes from 'prop-types';

import './title.scss';

const Title = ({
  title,
  author,
  difficulty,
  thumbnail,
}) => (
  <header className="title">
    <img
      className="title-image"
      alt=""
      src={thumbnail}
    />
    <div className="title-content">
      <h1 className="h1">{title}</h1>
      <p className="info">{author} - {difficulty}</p>
    </div>
  </header>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Title;
