import React from 'react';
import { InputProps } from 'types/types';

const FileInput = (props: InputProps) => {
  const { label, register, required, errors } = props;

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        className="form__input"
        type="file"
        accept="image/*"
        id={label}
        {...register('file', { required })}
      />
      {errors.file && errors.file.type === 'required' && (
        <span className="form__error">The field is empty</span>
      )}
    </>
  );
};

export default FileInput;
