import React from 'react';
import { InputProps } from 'types/types';

const GenderSelect = (props: InputProps) => {
  const { label, register, required, errors } = props;
  return (
    <>
      <label>{label}</label>
      <select className="form__input" {...register('gender', { required })}>
        <option value="" defaultChecked>
          Choose gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && errors.gender.type === 'required' && (
        <span className="form__error">Please select gender</span>
      )}
    </>
  );
};

export default GenderSelect;
