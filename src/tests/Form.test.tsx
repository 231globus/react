import React from 'react';
import { screen } from '@testing-library/react';
import Form from '../components/Form';
import userEvent from '@testing-library/user-event';
import { setupStore } from '../store';
import { renderWithProviders } from './utils/wrapper';

const store = setupStore();

describe('Form', () => {
  it('form contains all fields', () => {
    renderWithProviders(<Form />, {
      store,
    });
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select/i)).toBeInTheDocument();
    expect(screen.getAllByText(/male/i)).toHaveLength(2);
    expect(screen.getByLabelText(/file/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm/i)).toBeInTheDocument();
  });

  it('input name should be update the value', async () => {
    renderWithProviders(<Form />, {
      store,
    });
    const input: HTMLInputElement = screen.getByLabelText(/name/i);
    await userEvent.type(input, 'Vasya');
    expect(input).toHaveValue('Vasya');
  });
  it('input date should be update the value', async () => {
    renderWithProviders(<Form />, {
      store,
    });
    const input: HTMLInputElement = screen.getByLabelText(/date/i);
    await userEvent.type(input, '2022-01-04');
    expect(input).toHaveValue('2022-01-04');
  });
});
