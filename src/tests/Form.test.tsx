import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from '../components/Form';
import { User } from 'types/types';

describe('Form tests', () => {
  test('render form', () => {
    render(
      <Form
        updateUserList={function (object: User): void {
          throw new Error('Function not implemented.');
        }}
      />,
      { wrapper: BrowserRouter }
    );
  });
});
