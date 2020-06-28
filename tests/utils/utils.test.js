import { expect } from 'chai';

import { slugifyTitle, getRecipeBySlug } from 'src/utils';

describe('utils', () => {
  describe('function slugifyTitle', () => {
    it('is a function', () => {
      expect(slugifyTitle).to.be.a('function');
    });

    it('replaces spaces', () => {
      expect(slugifyTitle('chaîne de texte')).to.equal('chaine-de-texte');

    });

    it('replaces upper case', () => {
      expect(slugifyTitle('Pizza-Margherita')).to.equal('pizza-margherita');
    });
  });

  describe('function getRecipeBySlug', () => {
    it('finds a recipe by its slug', () => {
      const recipes = [
        {
          id: 1,
          title: 'Crêpes raffinées',
        },
        {
          id: 2,
          title: 'Des sushis',
        },
      ];

      const slug = slugifyTitle(recipes[1].title);

      expect(getRecipeBySlug(recipes, slug)).to.equal(recipes[1]);
    });
  });
});
