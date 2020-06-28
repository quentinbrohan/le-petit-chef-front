import { SAVE_RECIPES } from 'src/actions/recipes';

const initialState = {
  recipes: [],
  loading: true,
};

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };

    default: return state;
  }
};

export default recipes;
