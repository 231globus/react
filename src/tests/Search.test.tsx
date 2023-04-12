import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  it('input should be update field', async () => {
    render(<Search setFilter={() => {}} />);
    const input: HTMLInputElement = screen.getByPlaceholderText(/Input/i);
    await userEvent.type(input, 'Rick');
    expect(input).toHaveValue('Rick');
  });
  it('submit button should be call handleSubmit', async () => {
    render(<Search setFilter={() => {}} />);
    const submit: HTMLInputElement = screen.getByText(/Search/i);
    await userEvent.click(submit);
  });
});
