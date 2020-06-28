import { should } from 'chai';

import reducerRecipes from 'src/reducers/recipes';

import { saveRecipes } from 'src/actions/recipes';

should();

describe('reducer for recipes', () => {

  it('is a function', () => {
    // assertion
    reducerRecipes.should.be.a('function');
  });

  it('returns initial state', () => {
    const initialState = {
      recipes: [],
      loading: true,
    };
    // Vérifier chaque propriété
    reducerRecipes().should.deep.equal(initialState);
  });

  it('handles action SAVE_RECIPES', () => {
    const stateBefore = {
      recipes: [],
      loading: true,
    };

    const recipesData = [
      {
        id: 1,
        title: 'Crêpes raffinées',
      },
      {
        id: 2,
        title: 'Une super recette',
      },
    ];

    const action = saveRecipes(recipesData);

    const expectedResult = {
      recipes: recipesData,
      loading: false,
    };

    reducerRecipes(stateBefore, action).should.deep.equal(expectedResult);
  });
});
