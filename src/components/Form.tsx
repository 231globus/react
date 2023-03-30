import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from 'types/types';
import AgreeInput from './Form/AgreeInput';
import CoffeeInput from './Form/CoffeeInput';
import DateInput from './Form/DateInput';
import FileInput from './Form/FileInput';
import GenderSelect from './Form/GenderSelect';
import NameInput from './Form/NameInput';

type FormProps = {
  updateUserList: (object: User) => void;
};

const Form = (props: FormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      name: 'slava',
      date: '2023-03-04',
      gender: 'male',
      coffee: true,
      agree: true,
    },
  });
  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
    props.updateUserList(data);
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
