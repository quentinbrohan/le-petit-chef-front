import { connect } from 'react-redux';

import RecipeSmall from 'src/components/Home/RecipeSmall';

import { addToFavorite, removeFromFavorite } from 'src/actions/user';

const mapStateToProps = (state, ownProps) => {
  return ({
    // eslint-disable-next-line max-len
    isFavorite: state.user.info.favorites !== undefined && state.user.info.favorites.includes(ownProps.id),
  });
};

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (recipeId) => {
    dispatch(addToFavorite(recipeId));
  },
  removeFavorite: (recipeId) => {
    dispatch(removeFromFavorite(recipeId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSmall);
