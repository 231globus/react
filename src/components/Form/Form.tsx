import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import NameInput from './NameInput';

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);
  return (
    <>
      <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <NameInput label="Name:" register={register} errors={errors} required />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
