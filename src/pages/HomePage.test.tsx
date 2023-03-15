import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('Home Page', () => {
  test('render search', () => {
    render(<HomePage />);
    expect(screen.getByPlaceholderText(/Search card/i)).toBeInTheDocument();
  });
  test('render cards', () => {
    render(<HomePage />);
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
