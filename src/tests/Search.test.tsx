import React from 'react';
import { screen } from '@testing-library/react';
import Search from '../components/Search';
import userEvent from '@testing-library/user-event';
import { setupStore } from '../store';
import { renderWithProviders } from './utils/wrapper';

const store = setupStore();

describe('Search', () => {
  it('input should be update field', async () => {
    renderWithProviders(<Search />, {
      store,
    });
    const input: HTMLInputElement = screen.getByPlaceholderText(/Input/i);
    await userEvent.type(input, 'Rick');
    expect(input).toHaveValue('Rick');
  });
  it('submit button should be call handleSubmit', async () => {
    renderWithProviders(<Search />, {
      store,
    });
    const submit: HTMLInputElement = screen.getByText(/Search/i);
    await userEvent.click(submit);
  });
});
