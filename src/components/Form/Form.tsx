import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AgreeInput from './AgreeInput';
import CoffeeInput from './CoffeeInput';
import DateInput from './DateInput';
import FileInput from './FileInput';
import GenderSelect from './GenderSelect';
import NameInput from './NameInput';

type FormProps = {
  updateUserList: (object: IForm) => void;
};

const Form = (props: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
    // props.updateUserList(data);
  };
  return (
    <>
      <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <NameInput label="Name:" register={register} errors={errors} required />
        <DateInput label="Date:" register={register} errors={errors} required />
        <GenderSelect label="Select gender:" register={register} errors={errors} required />
        <CoffeeInput label="Coffee?" register={register} errors={errors} required />
        <FileInput label="File:" register={register} errors={errors} required />
        <AgreeInput label="Confirm to create:" register={register} errors={errors} required />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
