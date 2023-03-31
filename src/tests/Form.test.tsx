import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from '../components/Form';

describe('Form tests', () => {
  test('render form', () => {
    render(<Form updateUserList={console.log} />, { wrapper: BrowserRouter });
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select/i)).toBeInTheDocument();
    expect(screen.getAllByText(/male/i)).toHaveLength(2);
    expect(screen.getByLabelText(/file/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm/i)).toBeInTheDocument();
  });
});
