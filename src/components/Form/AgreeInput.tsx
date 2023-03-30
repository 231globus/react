import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type AgreeInputProps = {
  label: string;
  register: UseFormRegister<IForm>;
  required: boolean;
  errors: FieldErrors<IForm>;
};

const AgreeInput = (props: AgreeInputProps) => {
  const { label, register, required, errors } = props;
  return (
    <>
      <label>{label}</label>
      <input className="form__input" type="checkbox" {...register('agree', { required })} />
      {errors.agree && errors.agree.type === 'required' && (
        <span className="form__error">Confirm for create</span>
      )}
    </>
  );
};

export default AgreeInput;
