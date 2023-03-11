import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Renders main page correctly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
