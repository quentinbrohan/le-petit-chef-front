import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart } from 'react-feather';
import classNames from 'classnames';

import { slugifyTitle } from 'src/utils';

const RecipeSmall = ({
  id,
  title,
  thumbnail,
  difficulty,
  isFavorite,
  addFavorite,
  removeFavorite,
}) => {
  const cssClass = classNames('recipe-small', {
    'recipe-small--is-favorite': isFavorite,
  });

  const handleSubmit = (recipeId, recipeIsFavorite) => {
    if (recipeIsFavorite) {
      removeFavorite(recipeId);
    }
    else {
      addFavorite(recipeId);
    }
  };

  return (
    <article className={cssClass}>
      <img
        alt=""
        src={thumbnail}
      />
      <div className="recipe-small-content">
        <h2>{title}</h2>
        <p>Difficulté: {difficulty}</p>
        <div className="action">
          <Link
            to={`/recipe/${slugifyTitle(title)}`}
          >
            Voir la recette
          </Link>
          <div className="icon">
            <Heart
              className={isFavorite ? 'favorite' : ''}
              onClick={() => handleSubmit(id, isFavorite)}
            />
          </div>
        </div>
      </div>

    </article>
  );
};

RecipeSmall.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default RecipeSmall;
