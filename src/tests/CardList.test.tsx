import React from 'react';
import { render } from '@testing-library/react';
import CardsList from '../components/CardsList';
import fetch from 'node-fetch';

global.fetch = fetch as never;

describe('CardList tests', () => {
  test('render CardList', async () => {
    render(<CardsList />);
  });
});
