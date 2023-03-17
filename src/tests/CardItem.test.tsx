import React from 'react';
import { screen, render } from '@testing-library/react';
import CardItem from '../components/CardsItem';
import { products } from '../assets/dummy.json';

describe('Card tests', () => {
  test('should be render title, image, price, rait, description', () => {
    render(
      <CardItem
        title={products[0].title}
        description={products[0].description}
        price={products[0].price}
        raiting={products[0].rating}
        images={products[0].thumbnail}
      />
    );
    const title = screen.getByText(/iPhone 9/i);
    const description = screen.getByText(/An apple mobile/i);
    const image = screen.getByAltText(/iPhone 9/i);
    expect(title.textContent).toEqual(products[0].title);
    expect(description.textContent).toEqual(products[0].description);
    expect(image).toBeInTheDocument();
  });
});
