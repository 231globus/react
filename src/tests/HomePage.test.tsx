import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

describe('Home Page', () => {
  test('should be render home page', () => {
    const link = render(<HomePage />, { wrapper: BrowserRouter });
    expect(link).toBeTruthy();
  });
  test('render search', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    expect(screen.getByPlaceholderText(/Search card/i)).toBeInTheDocument();
  });
  test('render cards', () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
});
