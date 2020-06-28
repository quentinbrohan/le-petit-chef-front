import { connect } from 'react-redux';

import RecipeSmall from 'src/components/Home/RecipeSmall';

const mapStateToProps = (state, ownProps) => {
  return ({
    // eslint-disable-next-line max-len
    isFavorite: state.user.info.favorites !== undefined && state.user.info.favorites.includes(ownProps.id),
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSmall);
