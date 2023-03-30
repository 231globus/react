import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type FileInputProps = {
  label: string;
  register: UseFormRegister<IForm>;
  required: boolean;
  errors: FieldErrors<IForm>;
};

const FileInput = (props: FileInputProps) => {
  const { label, register, required, errors } = props;
  return (
    <>
      <label>{label}</label>
      <input
        className="form__input"
        type="file"
        accept="image/*"
        {...register('file', { required })}
      />
      {errors.file && errors.file.type === 'required' && (
        <span className="form__error">The field is empty</span>
      )}
    </>
  );
};

export default FileInput;
