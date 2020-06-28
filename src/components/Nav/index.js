import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { slugifyTitle } from 'src/utils';

import './nav.scss';

const Nav = ({ recipes }) => (
  <nav className="nav">
    <NavLink
      className="nav-item"
      to="/"
      activeClassName="nav-item-active"
      exact
    >
      Accueil
    </NavLink>
    <ul>
      <div>Recettes:</div>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <NavLink
            className="nav-item"
            to={`/recipe/${slugifyTitle(recipe.title)}`}
            activeClassName="nav-item-active"
          >
            {recipe.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Nav;
