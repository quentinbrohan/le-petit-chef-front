import { connect } from 'react-redux';

import { fetchRecipes } from 'src/actions/recipes';
import { checkLogged } from 'src/actions/user';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  loading: state.recipes.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => {
    dispatch(fetchRecipes());
  },
  checkLogged: () => {
    dispatch(checkLogged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
