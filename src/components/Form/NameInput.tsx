import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type NameInputProps = {
  label: string;
  register: UseFormRegister<IForm>;
  required: boolean;
  errors: FieldErrors<IForm>;
};

const NameInput = (props: NameInputProps) => {
  const { label, register, required, errors } = props;
  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        {...register('name', { required, pattern: /^[A-Za-z]+$/i, minLength: 5, maxLength: 16 })}
      />
      {errors.name && errors.name.type === 'required' && (
        <span className="form__error">The field is empty</span>
      )}
      {errors.name && errors.name.type === 'pattern' && (
        <span className="form__error">Name must contain only letters</span>
      )}
      {errors.name && errors.name.type === 'minLength' && (
        <span className="form__error">Name must be more than 5 characters</span>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <span className="form__error">Name must be less than 16 characters</span>
      )}
    </>
  );
};

export default NameInput;
