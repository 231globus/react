import React from 'react';
import { screen, render } from '@testing-library/react';
import UserItem from '../components/UserItem';

describe('User tests', () => {
  test('should be user card', () => {
    render(
      <UserItem
        key={1}
        name={'test'}
        birth={'01-02-2022'}
        gender={'Male'}
        doesUserLikeCoffe={true}
        avatar={'C:/rsc/image.jpg'}
      />
    );
    const name = screen.getByText(/test/i);
    expect(name).toBeInTheDocument();
  });
});
