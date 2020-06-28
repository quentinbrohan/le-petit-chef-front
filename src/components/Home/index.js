import React from 'react';
import PropTypes from 'prop-types';

import RecipeSmall from 'src/containers/Home/RecipeSmall';

import './home.scss';

const Home = ({ recipes }) => (
  <main className="home">
    <p>Bienvenue jeune chef. Régale-toi bien !</p>
    <div className="recipes-small">
      {recipes.map((recipe) => (
        <RecipeSmall {...recipe} key={recipe.id} />
      ))}
    </div>
  </main>
);

Home.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Home;
