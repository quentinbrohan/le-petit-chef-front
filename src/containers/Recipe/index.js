import { connect } from 'react-redux';

import Recipe from 'src/components/Recipe';

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
