import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('render App', () => {
    render(<App />, { wrapper: BrowserRouter });
  });
  test('full routing', async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
    await user.click(screen.getByText(/About/i));
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
  });
  test('routing on the error page', () => {
    const badRoute = '/qwdqwd';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 Ops/i)).toBeInTheDocument();
  });
});
