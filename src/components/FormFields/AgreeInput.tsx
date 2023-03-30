import React from 'react';
import { InputProps } from 'types/types';

const AgreeInput = (props: InputProps) => {
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
