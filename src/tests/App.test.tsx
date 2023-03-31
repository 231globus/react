import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('App tests', () => {
  test('render App component', () => {
    render(<App />, { wrapper: BrowserRouter });
  });
  test('render search', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByPlaceholderText(/Search card/i)).toBeInTheDocument();
  });
  test('render cards', () => {
    render(<App />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
  test('full routing', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    await user.click(screen.getByText(/About/i));
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
    await user.click(screen.getByText(/Form/i));
    expect(screen.getByText(/Form page/i)).toBeInTheDocument();
  });
  test('error page', () => {
    render(
      <MemoryRouter initialEntries={['/eoaecx']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/ops 404/i)).toBeInTheDocument();
  });
});
