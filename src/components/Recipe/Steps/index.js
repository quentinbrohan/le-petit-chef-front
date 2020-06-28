import React from 'react';
import PropTypes from 'prop-types';

import './steps.scss';

const Steps = ({ steps }) => (
  <ol className="steps">
    {steps.map((step) => (
      <li key={step} className="step">
        {step}
      </li>
    ))}
  </ol>
);

Steps.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
