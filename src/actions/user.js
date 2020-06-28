export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const LOG_OUT = 'LOG_OUT';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = (data, isLogged) => ({
  type: SAVE_USER,
  data,
  isLogged,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

export const addToFavorite = (recipeId) => ({
  type: ADD_TO_FAVORITE,
  recipeId,
});

export const removeFromFavorite = (recipeId) => ({
  type: REMOVE_FROM_FAVORITE,
  recipeId,
});
