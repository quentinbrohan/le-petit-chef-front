import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import Page from 'src/components/Page';
import LoaderBurger from 'src/components/LoaderBurger';

const App = ({ fetchRecipes, loading, checkLogged }) => {
  useEffect(() => {
    fetchRecipes();
    checkLogged();
  }, []);

  return (
    <div className="app">
      {loading && <LoaderBurger />}
      {!loading && (
        <>
          <Nav />
          <Page />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  checkLogged: PropTypes.func.isRequired,
};

export default App;
