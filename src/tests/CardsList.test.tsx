import React from 'react';
import { screen, render } from '@testing-library/react';
import CardsList from '../components/CardsList';

describe('Cards tests', () => {
  test('should be render 10 Cards', () => {
    render(<CardsList />);
    const cards = screen.getAllByTestId('card');
    expect(cards[0]).toBeInTheDocument();
    expect(cards.length).toBe(10);
  });
});
