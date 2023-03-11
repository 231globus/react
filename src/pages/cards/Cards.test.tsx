import { render } from '@testing-library/react';
import Cards from './Cards';
import React from 'react';

test('Render component App', () => {
  const { getByText } = render(<Cards />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
