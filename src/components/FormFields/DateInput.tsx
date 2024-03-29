import React from 'react';
import { InputProps } from 'types/types';

const DateInput = (props: InputProps) => {
  const { label, register, required, errors } = props;

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input className="form__input" id={label} type="date" {...register('date', { required })} />
      {errors.date && errors.date.type === 'required' && (
        <span className="form__error">Please select a date</span>
      )}
    </>
  );
};

export default DateInput;
