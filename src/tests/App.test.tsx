import { screen } from '@testing-library/react';
import App from '../App';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../tests/utils/wrapper';
import { setupStore } from '../store';

const store = setupStore();

describe('App', () => {
  it('render app component', () => {
    renderWithProviders(<App />, {
      store,
    });
  });
  it('render cards', () => {
    renderWithProviders(<App />, {
      store,
    });
    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
  test('full routing', async () => {
    renderWithProviders(<App />, {
      store,
    });
    const user = userEvent.setup();
    await user.click(screen.getByText(/About/i));
    expect(screen.getByText(/About page/i)).toBeInTheDocument();
    await user.click(screen.getByText(/Form/i));
    expect(screen.getByText(/Form page/i)).toBeInTheDocument();
  });
  // test('error page', () => {
  //   renderWithProviders(
  //     <MemoryRouter initialEntries={['/eoaecx']}>
  //       <App />
  //     </MemoryRouter>,
  //     {
  //       store,
  //     }
  //   );
  //   expect(screen.getByText(/ops 404/i)).toBeInTheDocument();
  // });
});
