import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type CoffeeInputProps = {
  label: string;
  register: UseFormRegister<IForm>;
  required: boolean;
  errors: FieldErrors<IForm>;
};

const CoffeeInput = (props: CoffeeInputProps) => {
  const { label, register, required, errors } = props;
  return (
    <>
      <label>{label}</label>
      <div className="form__input">
        <label>Yes</label>
        <input type="radio" value="yes" {...register('coffee', { required })} />
        <label>No</label>
        <input type="radio" value="no" {...register('coffee', { required })} />
      </div>

      {errors.coffee && errors.coffee.type === 'required' && (
        <span className="form__error">Do you want coffee?</span>
      )}
    </>
  );
};

export default CoffeeInput;
