import { render } from '@testing-library/react';
import CardsPage from '../pages/CardsPage';
import React from 'react';

test('Render component App', () => {
  const { getByText } = render(<CardsPage />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
