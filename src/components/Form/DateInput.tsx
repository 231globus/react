import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type DateInputProps = {
  label: string;
  register: UseFormRegister<IForm>;
  required: boolean;
  errors: FieldErrors<IForm>;
};

const DateInput = (props: DateInputProps) => {
  const { label, register, required, errors } = props;
  return (
    <>
      <label>{label}</label>
      <input className="form__input" type="date" {...register('date', { required })} />
      {errors.date && errors.date.type === 'required' && (
        <span className="form__error">Please select a date</span>
      )}
    </>
  );
};

export default DateInput;
