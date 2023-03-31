import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';

describe('App tests', () => {
  test('render App component', () => {
    render(<App />);
    screen.debug();
  });
});
