import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from '../components/Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  it('form contains all fields', () => {
    render(<Form updateUserList={() => {}} />, { wrapper: BrowserRouter });
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select/i)).toBeInTheDocument();
    expect(screen.getAllByText(/male/i)).toHaveLength(2);
    expect(screen.getByLabelText(/file/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm/i)).toBeInTheDocument();
  });

  it('input name should be update the value', async () => {
    render(<Form updateUserList={() => {}} />, { wrapper: BrowserRouter });
    const input: HTMLInputElement = screen.getByLabelText(/name/i);
    await userEvent.type(input, 'Vasya');
    expect(input).toHaveValue('Vasya');
  });
  it('input date should be update the value', async () => {
    render(<Form updateUserList={() => {}} />, { wrapper: BrowserRouter });
    const input: HTMLInputElement = screen.getByLabelText(/date/i);
    await userEvent.type(input, '2022-01-04');
    expect(input).toHaveValue('2022-01-04');
  });
});
