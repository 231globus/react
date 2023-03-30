import React from 'react';
import { InputProps } from 'types/types';

const CoffeeInput = (props: InputProps) => {
  const { label, register, required, errors } = props;

  return (
    <>
      <label>{label}</label>
      <div className="form__input form__coffee coffe">
        <div className="coffee__yes">
          <label>Yes</label>
          <input type="radio" value="yes" {...register('coffee', { required })} />
        </div>
        <div className="coffee__no">
          <label>No</label>
          <input type="radio" value="no" {...register('coffee', { required })} />
        </div>
      </div>

      {errors.coffee && errors.coffee.type === 'required' && (
        <span className="form__error">Do you want coffee?</span>
      )}
    </>
  );
};

export default CoffeeInput;
