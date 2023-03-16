import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  test('should be render App', () => {
    const link = render(<App />, { wrapper: BrowserRouter });
    expect(link).toBeTruthy();
  });
});
