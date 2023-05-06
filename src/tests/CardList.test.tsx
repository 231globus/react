import React from 'react';
import CardsList from '../components/CardsList';
import { renderWithProviders } from './utils/wrapper';
import { setupStore } from '../store';

const store = setupStore();

describe('CardList tests', () => {
  test('render CardList', async () => {
    renderWithProviders(<CardsList />, {
      store,
    });
  });
});
