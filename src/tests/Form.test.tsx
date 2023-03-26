import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from '../components/Form/Form';
import NameField from '../components/Form/NameField';
import DateField from '../components/Form/DateField';
import FileField from '../components/Form/FileField';

const updateUserList = () => {
  return;
};

const errorMessage = {
  name: '',
  date: '',
  gender: '',
  coffee: '',
  file: '',
  agree: '',
};

const ref: React.RefObject<HTMLInputElement> = React.createRef();

describe('Form', () => {
  test('should be render Form', () => {
    const link = render(<Form updateUserList={updateUserList} />, { wrapper: BrowserRouter });
    expect(link).toBeTruthy();
  });

  test('should be render Input Name', () => {
    const link = render(<NameField errorMessage={errorMessage} inputName={ref} />, {
      wrapper: BrowserRouter,
    });
    expect(link).toBeTruthy();
  });
  test('should be render Input Date', () => {
    const link = render(<DateField errorMessage={errorMessage} inputDate={ref} />, {
      wrapper: BrowserRouter,
    });
    expect(link).toBeTruthy();
  });
  test('should be render Input File', () => {
    const link = render(<FileField errorMessage={errorMessage} inputFile={ref} />, {
      wrapper: BrowserRouter,
    });
    expect(link).toBeTruthy();
  });
});
