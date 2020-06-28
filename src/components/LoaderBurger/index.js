import React from 'react';

import './loaderBurger.scss';

const LoaderBurger = () => (
  <div className="loader-burger">
    <main className="wrapper">
      <div className="loader">
        <img className="loader__animated" src="https://image.flaticon.com/icons/svg/561/561071.svg" alt="" />
        <img src="https://image.flaticon.com/icons/svg/560/560969.svg" alt="" />
      </div>
    </main>
  </div>
);

export default LoaderBurger;
