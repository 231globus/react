import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

const setup = () => {
  const utils = render(<Search />);
  const input = screen.getByPlaceholderText(/Search/i) as HTMLInputElement;
  return {
    input,
    ...utils,
  };
};

describe('Search tests', () => {
  test('input should be work', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'random value' } });
    expect(input.value).toBe('random value');
  });
});
