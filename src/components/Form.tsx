import React, { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User } from 'types/types';
import AgreeInput from './FormFields/AgreeInput';
import CoffeeInput from './FormFields/CoffeeInput';
import DateInput from './FormFields/DateInput';
import FileInput from './FormFields/FileInput';
import GenderSelect from './FormFields/GenderSelect';
import NameInput from './FormFields/NameInput';
import PopUp from './PopUp';

type FormProps = {
  updateUserList: (object: User) => void;
};

const Form = (props: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [popUp, showPopUp] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    const formData = {
      ...data,
      filelink: URL.createObjectURL(data.file[0]),
    };
    props.updateUserList(formData);
    showPopUp(true);
    setTimeout(() => {
      showPopUp(false);
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <>
      {popUp ? <PopUp /> : <></>}
      <form className="form" role="form" ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <NameInput label="Name:" register={register} errors={errors} required />
        <DateInput label="Date:" register={register} errors={errors} required />
        <GenderSelect label="Select gender:" register={register} errors={errors} required />
        <CoffeeInput label="Coffee?" register={register} errors={errors} required />
        <FileInput label="File:" register={register} errors={errors} required />
        <AgreeInput label="Confirm to create  " register={register} errors={errors} required />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
