/* eslint-disable no-case-declarations */
import {
  UPDATE_USER_FIELD,
  SAVE_USER,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  info: {},
  isLogged: false,
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case SAVE_USER:
      return {
        ...state,
        info: action.data,
        isLogged: action.isLogged,
        email: '',
        password: '',
      };

    case REMOVE_FROM_FAVORITE:
      // console.log(action.recipeId);
      // console.log(state);

      const { favorites: actualFavorites } = state.info;
      // console.log(actualFavorites);

      const recipeToRemove = action.recipeId;
      const favoritesUpdated = actualFavorites.filter((recipe) => recipe !== recipeToRemove);
      // console.log(favoritesUpdated);

      return {
        ...state,
        info: {
          ...state.info,
          favorites: favoritesUpdated,
        },
      };

    case ADD_TO_FAVORITE:
      const { favorites: oldFavorites } = state.info;

      const recipeToAdd = action.recipeId;
      const favoritesUD = [
        ...oldFavorites,
        recipeToAdd,
      ];

      return {
        ...state,
        info: {
          ...state.info,
          favorites: favoritesUD,
        },
      };

    default: return state;
  }
};

export default user;
