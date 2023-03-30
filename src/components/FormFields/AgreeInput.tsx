import React from 'react';
import { InputProps } from 'types/types';

const AgreeInput = (props: InputProps) => {
  const { label, register, required, errors } = props;

  return (
    <div className="form__agree form__input">
      <label htmlFor="agree">{label}</label>
      <input type="checkbox" id="agree" {...register('agree', { required })} />
      {errors.agree && errors.agree.type === 'required' && (
        <span className="form__error">Confirm for create</span>
      )}
    </div>
  );
};

export default AgreeInput;
