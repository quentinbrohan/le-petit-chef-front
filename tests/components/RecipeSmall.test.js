import React from 'react';

import { shallow } from 'enzyme';

import { expect } from 'chai';

import RecipeSmall from 'src/components/Home/RecipeSmall';

import { Link } from 'react-router-dom';
import { Heart } from 'react-feather';

// describe.only('<RecipeSmall />', () => {
describe('<RecipeSmall />', () => {
  // it.skip('Uses information given as props', () => {
  it('Uses information given as props', () => {
    const testTitle = 'Pizza au fromage';
    const slug = 'pizza-au-fromage';

    const wrapper = shallow(<RecipeSmall title={testTitle} thumbnail="img1.png" difficulty="Facile" isFavorite={false} />);

    const elementsH2 = wrapper.find('h2'); // .nomDeClasse // NomDUnComposant
    expect(elementsH2).to.have.lengthOf(1);
    expect(elementsH2.text()).to.equal(testTitle);

    const linkComponents = wrapper.find(Link);
    expect(linkComponents).to.have.lengthOf(1);
    expect(linkComponents.props()).to.have.property('to', `/recipe/${slug}`);
  });

  it('Highlight favorite recipes', () => {
    let wrapper = shallow(<RecipeSmall title="a" thumbnail="img1.png" difficulty="Facile" isFavorite={false} />);

    let articles = wrapper.find('article');
    expect(articles).to.have.lengthOf(1);
    expect(articles.props()).to.have.property('className', 'recipe-small');

    let heartComponents = wrapper.find(Heart);
    expect(heartComponents).to.have.lengthOf(0);

    wrapper = shallow(<RecipeSmall title="a" thumbnail="img1.png" difficulty="Facile" isFavorite />);

    articles = wrapper.find('article');
    expect(articles).to.have.lengthOf(1);
    expect(articles.props()).to.have.property('className', 'recipe-small recipe-small--is-favorite');

    heartComponents = wrapper.find(Heart);
    expect(heartComponents).to.have.lengthOf(1);
  });
});
